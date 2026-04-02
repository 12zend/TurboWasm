import './import-first';

import PropTypes from 'prop-types';
import React from 'react';

import Renderer from 'scratch-render';
import VM from 'scratch-vm';
import AudioEngine from 'scratch-audio';
import {BitmapAdapter as V2BitmapAdapter} from '@turbowarp/scratch-svg-renderer';

import storage from '../lib/storage';
import VideoProvider from '../lib/video/video-provider';
import {getEventXY} from '../lib/touch-utils';
import render from './app-target';

import styles from './vm-live.css';

/* eslint-disable import/no-unresolved */
import defaultProject from '!arraybuffer-loader!../../../vm/test/fixtures/default.sb3';
import glideProject from '!arraybuffer-loader!../../../vm/test/fixtures/tw-glide.sb3';
/* eslint-enable import/no-unresolved */

const SAMPLE_PROJECTS = {
    glide: {
        label: 'TurboWarp Glide Demo',
        buffer: glideProject,
        autoStart: true
    },
    default: {
        label: 'Scratch Default Cat',
        buffer: defaultProject,
        autoStart: false
    }
};

const DEFAULT_SAMPLE = 'glide';
const DEFAULT_PROJECT_HOST = 'https://projects.scratch.mit.edu';
const DEFAULT_ASSET_HOST = 'https://assets.scratch.mit.edu';

const isEditableElement = element => (
    element &&
    (
        element.tagName === 'INPUT' ||
        element.tagName === 'TEXTAREA' ||
        element.tagName === 'SELECT' ||
        element.isContentEditable
    )
);

const normalizeProjectUrl = projectUrl => {
    if (!projectUrl) return '';
    if (
        projectUrl.startsWith('http://') ||
        projectUrl.startsWith('https://') ||
        projectUrl.startsWith('data:')
    ) {
        return projectUrl;
    }
    return `https://${projectUrl}`;
};

const createLogEntry = (type, message) => ({
    id: `${Date.now()}-${Math.random()}`,
    type,
    message,
    time: new Date().toLocaleTimeString()
});

class Toggle extends React.PureComponent {
    render () {
        const {
            checked,
            hint,
            label,
            onChange
        } = this.props;
        return (
            <label className={styles.toggle}>
                <span className={styles.toggleMeta}>
                    <span className={styles.toggleLabel}>{label}</span>
                    <span className={styles.toggleHint}>{hint}</span>
                </span>
                <span className={styles.switch}>
                    <input
                        checked={checked}
                        onChange={onChange}
                        type="checkbox"
                    />
                    <span className={styles.switchTrack} />
                    <span className={styles.switchThumb} />
                </span>
            </label>
        );
    }
}

Toggle.propTypes = {
    checked: PropTypes.bool.isRequired,
    hint: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

class VMLivePage extends React.Component {
    constructor (props) {
        super(props);
        this.canvas = document.createElement('canvas');
        this.canvasHost = null;
        this.vm = new VM();
        this.renderer = new Renderer(this.canvas, -240, 240, -180, 180);
        this.fileInputRef = React.createRef();
        this.questionInputRef = React.createRef();
        this.statsFrame = null;
        this.lastFrameTime = 0;
        this.lastStatsCommit = 0;
        this.rect = null;

        this.state = {
            autoStart: true,
            compileErrors: 0,
            compilerEnabled: true,
            compilerLog: [],
            error: '',
            fps: 0,
            isLoading: true,
            isRunning: false,
            isRuntimeStarted: false,
            monitors: [],
            offloadEnabled: false,
            projectLabel: SAMPLE_PROJECTS[DEFAULT_SAMPLE].label,
            projectUrl: '',
            question: null,
            questionAnswer: '',
            rendererBackend: 'Booting',
            selectedSample: DEFAULT_SAMPLE,
            stageSize: '480x360',
            targetCount: 0,
            turboEnabled: false,
            wasmEnabled: true,
            webglEnabled: true
        };

        this.handleCanvasResize = this.handleCanvasResize.bind(this);
        this.handleCompileError = this.handleCompileError.bind(this);
        this.handleCompilerToggle = this.handleCompilerToggle.bind(this);
        this.handleContextMenu = this.handleContextMenu.bind(this);
        this.handleDrop = this.handleDrop.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleFilePicker = this.handleFilePicker.bind(this);
        this.handleGreenFlag = this.handleGreenFlag.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleMonitorUpdate = this.handleMonitorUpdate.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleProjectUrlChange = this.handleProjectUrlChange.bind(this);
        this.handleQuestionAnswer = this.handleQuestionAnswer.bind(this);
        this.handleQuestionSubmit = this.handleQuestionSubmit.bind(this);
        this.handleRemoteLoad = this.handleRemoteLoad.bind(this);
        this.handleRuntimeStart = this.handleRuntimeStart.bind(this);
        this.handleRuntimeStop = this.handleRuntimeStop.bind(this);
        this.handleRunStart = this.handleRunStart.bind(this);
        this.handleRunStop = this.handleRunStop.bind(this);
        this.handleSampleChange = this.handleSampleChange.bind(this);
        this.handleSampleLoad = this.handleSampleLoad.bind(this);
        this.handleStopAll = this.handleStopAll.bind(this);
        this.handleToggleChange = this.handleToggleChange.bind(this);
        this.handleTurboToggle = this.handleTurboToggle.bind(this);
        this.handleWheel = this.handleWheel.bind(this);
        this.pollStats = this.pollStats.bind(this);
        this.setCanvasHost = this.setCanvasHost.bind(this);
    }

    componentDidMount () {
        window.vm = this.vm;
        window.renderer = this.renderer;

        storage.setProjectHost(DEFAULT_PROJECT_HOST);
        storage.setAssetHost(DEFAULT_ASSET_HOST);

        this.vm.attachStorage(storage);
        this.vm.attachRenderer(this.renderer);
        this.vm.attachV2BitmapAdapter(new V2BitmapAdapter());
        this.vm.setVideoProvider(new VideoProvider());
        this.vm.setCompatibilityMode(true);

        try {
            this.audioEngine = new AudioEngine();
            this.vm.attachAudioEngine(this.audioEngine);
        } catch (e) {
            this.pushLog('error', `Audio engine unavailable: ${e}`);
        }

        this.vm.on('PROJECT_RUN_START', this.handleRunStart);
        this.vm.on('PROJECT_RUN_STOP', this.handleRunStop);
        this.vm.on('RUNTIME_STARTED', this.handleRuntimeStart);
        this.vm.on('RUNTIME_STOPPED', this.handleRuntimeStop);
        this.vm.on('COMPILE_ERROR', this.handleCompileError);
        this.vm.on('TURBO_MODE_ON', () => this.setState({turboEnabled: true}));
        this.vm.on('TURBO_MODE_OFF', () => this.setState({turboEnabled: false}));
        this.vm.on('MONITORS_UPDATE', this.handleMonitorUpdate);
        this.vm.runtime.on('QUESTION', question => {
            this.setState({
                question: question,
                questionAnswer: ''
            }, () => {
                if (question !== null && this.questionInputRef.current) {
                    this.questionInputRef.current.focus();
                }
            });
        });
        this.vm.runtime.on('PROJECT_LOADED', () => {
            const nativeSize = this.renderer.getNativeSize();
            const rendererBackend = this.renderer && this.renderer._gl ? 'WebGL' : 'Canvas Fallback';
            this.setState({
                error: '',
                isLoading: false,
                rendererBackend,
                stageSize: `${nativeSize[0]}x${nativeSize[1]}`,
                targetCount: this.vm.runtime.targets.length
            });
            this.renderer.draw();
        });

        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('touchmove', this.handleMouseMove, {passive: false});
        document.addEventListener('touchend', this.handleMouseUp);
        document.addEventListener('keydown', this.handleKeyDown);
        document.addEventListener('keyup', this.handleKeyUp);
        window.addEventListener('resize', this.handleCanvasResize);
        window.addEventListener('dragover', this.handleDrop);
        window.addEventListener('drop', this.handleDrop);

        this.vm.start();
        this.handleCanvasResize();
        this.applyCompilerOptions();
        this.renderer.draw();
        this.statsFrame = requestAnimationFrame(this.pollStats);

        const searchParams = new URLSearchParams(location.search);
        const requestedProjectUrl = searchParams.get('project_url') || '';
        const sample = searchParams.get('sample') || DEFAULT_SAMPLE;
        const sampleId = SAMPLE_PROJECTS[sample] ? sample : DEFAULT_SAMPLE;
        const autoStart = searchParams.has('autoplay') ?
            searchParams.get('autoplay') !== '0' :
            SAMPLE_PROJECTS[sampleId].autoStart;

        this.setState({
            autoStart,
            projectUrl: requestedProjectUrl,
            selectedSample: sampleId
        }, () => {
            if (requestedProjectUrl) {
                this.handleRemoteLoad();
            } else {
                this.loadProjectBuffer(
                    SAMPLE_PROJECTS[sampleId].buffer,
                    SAMPLE_PROJECTS[sampleId].label,
                    autoStart
                );
            }
        });
    }

    componentWillUnmount () {
        cancelAnimationFrame(this.statsFrame);
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('touchmove', this.handleMouseMove);
        document.removeEventListener('touchend', this.handleMouseUp);
        document.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('keyup', this.handleKeyUp);
        window.removeEventListener('resize', this.handleCanvasResize);
        window.removeEventListener('dragover', this.handleDrop);
        window.removeEventListener('drop', this.handleDrop);
        this.canvas.removeEventListener('mousedown', this.handleMouseDown);
        this.canvas.removeEventListener('touchstart', this.handleMouseDown);
        this.canvas.removeEventListener('wheel', this.handleWheel);
        this.canvas.removeEventListener('contextmenu', this.handleContextMenu);
        this.vm.stopAll();
        this.vm.quit();
    }

    setCanvasHost (element) {
        if (this.canvasHost === element) {
            return;
        }
        this.canvasHost = element;
        if (element && this.canvas.parentNode !== element) {
            element.appendChild(this.canvas);
            this.canvas.addEventListener('mousedown', this.handleMouseDown);
            this.canvas.addEventListener('touchstart', this.handleMouseDown, {passive: false});
            this.canvas.addEventListener('wheel', this.handleWheel, {passive: false});
            this.canvas.addEventListener('contextmenu', this.handleContextMenu);
            this.handleCanvasResize();
        }
    }

    getMouseData (e) {
        this.rect = this.canvas.getBoundingClientRect();
        const {x, y} = getEventXY(e);
        return {
            x: x - this.rect.left,
            y: y - this.rect.top,
            canvasWidth: this.rect.width,
            canvasHeight: this.rect.height
        };
    }

    pushLog (type, message) {
        this.setState(prevState => ({
            compilerLog: [createLogEntry(type, message)].concat(prevState.compilerLog).slice(0, 8)
        }));
    }

    applyCompilerOptions () {
        this.vm.setTurboMode(this.state.turboEnabled);
        this.vm.setCompilerOptions({
            enabled: this.state.compilerEnabled,
            warpTimer: false,
            offload: {
                enabled: this.state.offloadEnabled,
                wasm: this.state.wasmEnabled,
                webgl: this.state.webglEnabled,
                minWasmIterations: 256,
                minWebGLElements: 4096,
                verifyGPU: 'conservative'
            }
        });
    }

    async loadProjectBuffer (buffer, label, autoStart = this.state.autoStart) {
        this.setState({
            error: '',
            isLoading: true,
            projectLabel: label,
            question: null
        });
        this.vm.stopAll();
        this.vm.clear();
        this.handleMonitorUpdate(null);
        try {
            await this.vm.loadProject(buffer);
            this.pushLog('info', `Loaded ${label}`);
            if (autoStart) {
                this.vm.greenFlag();
            }
        } catch (e) {
            this.setState({
                error: `${e}`,
                isLoading: false
            });
            this.pushLog('error', `Load failed: ${e}`);
        }
    }

    async loadRemoteProject (projectUrl) {
        const normalizedUrl = normalizeProjectUrl(projectUrl);
        this.setState({
            error: '',
            isLoading: true,
            projectUrl: normalizedUrl
        });
        try {
            const response = await fetch(normalizedUrl);
            if (!response.ok) {
                throw new Error(`Request returned status ${response.status}`);
            }
            const buffer = await response.arrayBuffer();
            await this.loadProjectBuffer(buffer, normalizedUrl);
        } catch (e) {
            this.setState({
                error: `${e}`,
                isLoading: false
            });
            this.pushLog('error', `Remote load failed: ${e}`);
        }
    }

    pollStats (timestamp) {
        if (this.lastFrameTime) {
            const instantaneousFps = 1000 / Math.max(1, timestamp - this.lastFrameTime);
            if (timestamp - this.lastStatsCommit > 240) {
                const nativeSize = this.renderer.getNativeSize();
                this.setState({
                    fps: Math.round(instantaneousFps),
                    rendererBackend: this.renderer && this.renderer._gl ? 'WebGL' : 'Canvas Fallback',
                    stageSize: `${nativeSize[0]}x${nativeSize[1]}`,
                    targetCount: this.vm.runtime.targets.length
                });
                this.lastStatsCommit = timestamp;
            }
        }
        this.lastFrameTime = timestamp;
        this.statsFrame = requestAnimationFrame(this.pollStats);
    }

    handleCanvasResize () {
        if (!this.canvasHost) {
            return;
        }
        const {clientWidth, clientHeight} = this.canvasHost;
        if (clientWidth > 0 && clientHeight > 0) {
            this.renderer.resize(clientWidth, clientHeight);
            this.renderer.draw();
        }
    }

    handleCompileError (target, error) {
        this.setState(prevState => ({
            compileErrors: prevState.compileErrors + 1
        }));
        this.pushLog('error', `${target.getName()}: ${error}`);
    }

    handleContextMenu (e) {
        e.preventDefault();
    }

    handleMonitorUpdate (monitors) {
        if (!monitors || typeof monitors.valueSeq !== 'function') {
            this.setState({monitors: []});
            return;
        }
        const renderedMonitors = monitors.valueSeq()
            .toArray()
            .filter(monitor => monitor.get('visible'))
            .slice(0, 6)
            .map(monitor => {
                const params = monitor.get('params');
                const label = params ?
                    (typeof params.get === 'function' ? params.get('LABEL') : params.LABEL) :
                    null;
                return {
                    id: monitor.get('id'),
                    label: label || monitor.get('opcode'),
                    value: `${monitor.get('value')}`
                };
            });
        this.setState({monitors: renderedMonitors});
    }

    handleRunStart () {
        this.setState({isRunning: true});
    }

    handleRunStop () {
        this.setState({isRunning: false});
    }

    handleRuntimeStart () {
        this.setState({isRuntimeStarted: true});
    }

    handleRuntimeStop () {
        this.setState({isRuntimeStarted: false});
    }

    handleGreenFlag () {
        this.vm.greenFlag();
        this.pushLog('info', 'Green flag started');
    }

    handleStopAll () {
        this.vm.stopAll();
        this.pushLog('info', 'Stopped all scripts');
    }

    handleTurboToggle () {
        this.setState(prevState => ({
            turboEnabled: !prevState.turboEnabled
        }), () => {
            this.vm.setTurboMode(this.state.turboEnabled);
            this.pushLog('info', `Turbo ${this.state.turboEnabled ? 'enabled' : 'disabled'}`);
        });
    }

    handleCompilerToggle () {
        this.setState(prevState => ({
            compilerEnabled: !prevState.compilerEnabled
        }), () => {
            this.applyCompilerOptions();
            this.pushLog('info', `Compiler ${this.state.compilerEnabled ? 'enabled' : 'disabled'}`);
        });
    }

    handleToggleChange (key) {
        this.setState(prevState => ({
            [key]: !prevState[key]
        }), () => {
            this.applyCompilerOptions();
            this.pushLog('info', `${key} => ${this.state[key]}`);
        });
    }

    handleProjectUrlChange (e) {
        this.setState({projectUrl: e.target.value});
    }

    handleRemoteLoad (e) {
        if (e) e.preventDefault();
        if (!this.state.projectUrl.trim()) {
            return;
        }
        this.loadRemoteProject(this.state.projectUrl.trim());
    }

    handleSampleChange (e) {
        this.setState({selectedSample: e.target.value});
    }

    handleSampleLoad () {
        const sample = SAMPLE_PROJECTS[this.state.selectedSample];
        this.loadProjectBuffer(sample.buffer, sample.label, this.state.autoStart);
    }

    handleFilePicker () {
        if (this.fileInputRef.current) {
            this.fileInputRef.current.click();
        }
    }

    handleFileChange (e) {
        const file = e.target.files && e.target.files[0];
        if (!file) {
            return;
        }
        const reader = new FileReader();
        reader.onload = () => {
            this.loadProjectBuffer(reader.result, file.name, this.state.autoStart);
        };
        reader.onerror = () => {
            this.pushLog('error', `Failed to read ${file.name}`);
        };
        reader.readAsArrayBuffer(file);
        e.target.value = '';
    }

    handleDrop (e) {
        if (e.type === 'dragover') {
            e.preventDefault();
            return;
        }
        if (e.type !== 'drop') {
            return;
        }
        const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (!file || !/\.(sb|sb2|sb3)$/i.test(file.name)) {
            return;
        }
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = () => {
            this.loadProjectBuffer(reader.result, file.name, this.state.autoStart);
        };
        reader.readAsArrayBuffer(file);
    }

    handleQuestionAnswer (e) {
        this.setState({questionAnswer: e.target.value});
    }

    handleQuestionSubmit (e) {
        e.preventDefault();
        this.vm.runtime.emit('ANSWER', this.state.questionAnswer);
        this.setState({
            question: null,
            questionAnswer: ''
        });
    }

    handleMouseMove (e) {
        if (!this.canvasHost) {
            return;
        }
        if (e.type === 'touchmove') {
            e.preventDefault();
        }
        const coordinates = this.getMouseData(e);
        this.vm.postIOData('mouse', coordinates);
    }

    handleMouseDown (e) {
        if (e.type === 'touchstart') {
            e.preventDefault();
        }
        const coordinates = this.getMouseData(e);
        this.vm.postIOData('mouse', {
            isDown: true,
            button: e.button || 0,
            ...coordinates
        });
    }

    handleMouseUp (e) {
        if (!this.canvasHost) {
            return;
        }
        const coordinates = this.getMouseData(e);
        this.vm.postIOData('mouse', {
            isDown: false,
            button: e.button || 0,
            ...coordinates
        });
    }

    handleWheel (e) {
        e.preventDefault();
        this.vm.postIOData('mouseWheel', {
            deltaY: e.deltaY
        });
    }

    handleKeyDown (e) {
        if (isEditableElement(e.target)) {
            return;
        }
        const key = (!e.key || e.key === 'Dead') ? e.keyCode : e.key;
        this.vm.postIOData('keyboard', {
            key: key,
            keyCode: e.keyCode,
            isDown: true
        });
        if (e.keyCode === 32 || (e.keyCode >= 37 && e.keyCode <= 40) || e.keyCode === 8) {
            e.preventDefault();
        }
    }

    handleKeyUp (e) {
        if (isEditableElement(e.target)) {
            return;
        }
        const key = (!e.key || e.key === 'Dead') ? e.keyCode : e.key;
        this.vm.postIOData('keyboard', {
            key: key,
            keyCode: e.keyCode,
            isDown: false
        });
    }

    renderMonitorList () {
        if (this.state.monitors.length === 0) {
            return (
                <p className={styles.emptyState}>
                    Visible monitors will appear here when the loaded project updates them.
                </p>
            );
        }
        return (
            <div className={styles.monitorList}>
                {this.state.monitors.map(monitor => (
                    <div
                        className={styles.monitorItem}
                        key={monitor.id}
                    >
                        <span className={styles.monitorLabel}>{monitor.label}</span>
                        <span className={styles.monitorValue}>{monitor.value}</span>
                    </div>
                ))}
            </div>
        );
    }

    renderLogList () {
        if (this.state.compilerLog.length === 0) {
            return (
                <p className={styles.emptyState}>
                    Compile errors, load failures, and runtime actions are streamed here.
                </p>
            );
        }
        return (
            <div className={styles.logList}>
                {this.state.compilerLog.map(entry => (
                    <div
                        className={`${styles.logItem} ${entry.type === 'error' ? styles.logError : ''}`}
                        key={entry.id}
                    >
                        <span className={styles.logMeta}>{entry.time} · {entry.type}</span>
                        <div>{entry.message}</div>
                    </div>
                ))}
            </div>
        );
    }

    render () {
        const offloadSummary = this.state.offloadEnabled ?
            (
                `${this.state.wasmEnabled ? 'WASM' : ''}` +
                `${this.state.wasmEnabled && this.state.webglEnabled ? ' + ' : ''}` +
                `${this.state.webglEnabled ? 'WebGL' : ''}`
            ) || 'Planner On' :
            'JS only';

        return (
            <div className={styles.page}>
                <div className={styles.shell}>
                    <section className={styles.stagePanel}>
                        <div className={styles.stageHeader}>
                            <div>
                                <p className={styles.eyebrow}>TurboWasm VM Live Surface</p>
                                <h1 className={styles.title}>Local VM, GUI renderer, WebGL stage.</h1>
                                <p className={styles.subtitle}>
                                    GUI 側の stage 初期化パターンで VM を直接駆動し、Scratch プロジェクトをリアルタイム描画します。
                                    `.sb3` のドロップ、URL 読込、Turbo/Compiler/Offload 切替に対応しています。
                                </p>
                            </div>
                            <div className={styles.pills}>
                                <span className={`${styles.pill} ${styles.pillActive}`}>{this.state.rendererBackend}</span>
                                <span className={`${styles.pill} ${this.state.isRunning ? styles.pillActive : ''}`}>
                                    {this.state.isRunning ? 'Running' : 'Idle'}
                                </span>
                                <span className={styles.pill}>{offloadSummary}</span>
                            </div>
                        </div>

                        <div className={styles.stageViewport}>
                            <div
                                className={styles.canvasHost}
                                ref={this.setCanvasHost}
                            />

                            <div className={styles.overlayTop}>
                                <div className={styles.overlayCard}>
                                    <div className={styles.overlayTitle}>Project</div>
                                    <p className={styles.overlayText}>{this.state.projectLabel}</p>
                                </div>
                                <div className={styles.overlayCard}>
                                    <div className={styles.overlayTitle}>Input</div>
                                    <p className={styles.overlayText}>Mouse, wheel, keyboard, ask blocks</p>
                                </div>
                            </div>

                            <div className={styles.overlayBottom}>
                                <div className={styles.overlayCard}>
                                    <div className={styles.overlayTitle}>Drop Zone</div>
                                    <p className={styles.overlayText}>Drop `.sb`, `.sb2`, or `.sb3` anywhere</p>
                                </div>
                                {this.state.error ? (
                                    <div className={styles.overlayCard}>
                                        <div className={styles.overlayTitle}>Error</div>
                                        <p className={styles.overlayText}>{this.state.error}</p>
                                    </div>
                                ) : null}
                            </div>

                            {this.state.question !== null ? (
                                <div className={styles.questionPanel}>
                                    <p className={styles.questionTitle}>Question</p>
                                    <p className={styles.questionText}>{this.state.question || 'Enter your answer'}</p>
                                    <form
                                        className={styles.questionForm}
                                        onSubmit={this.handleQuestionSubmit}
                                    >
                                        <input
                                            className={styles.questionInput}
                                            onChange={this.handleQuestionAnswer}
                                            placeholder="Type an answer for the project"
                                            ref={this.questionInputRef}
                                            value={this.state.questionAnswer}
                                        />
                                        <button
                                            className={styles.button}
                                            type="submit"
                                        >
                                            Send Answer
                                        </button>
                                    </form>
                                </div>
                            ) : null}
                        </div>
                    </section>

                    <aside className={styles.controlPanel}>
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Transport</h2>
                            <div className={styles.buttonRow}>
                                <button
                                    className={styles.button}
                                    disabled={this.state.isLoading}
                                    onClick={this.handleGreenFlag}
                                >
                                    Green Flag
                                </button>
                                <button
                                    className={`${styles.button} ${styles.dangerButton}`}
                                    onClick={this.handleStopAll}
                                >
                                    Stop
                                </button>
                                <button
                                    className={styles.secondaryButton}
                                    onClick={this.handleTurboToggle}
                                >
                                    Turbo: {this.state.turboEnabled ? 'On' : 'Off'}
                                </button>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Load Project</h2>
                            <div className={styles.controlGrid}>
                                <div className={styles.fieldRow}>
                                    <select
                                        className={styles.selectInput}
                                        onChange={this.handleSampleChange}
                                        value={this.state.selectedSample}
                                    >
                                        {Object.keys(SAMPLE_PROJECTS).map(key => (
                                            <option
                                                key={key}
                                                value={key}
                                            >
                                                {SAMPLE_PROJECTS[key].label}
                                            </option>
                                        ))}
                                    </select>
                                    <button
                                        className={styles.secondaryButton}
                                        onClick={this.handleSampleLoad}
                                    >
                                        Load Sample
                                    </button>
                                </div>
                                <form
                                    className={styles.fieldRow}
                                    onSubmit={this.handleRemoteLoad}
                                >
                                    <input
                                        className={styles.textInput}
                                        onChange={this.handleProjectUrlChange}
                                        placeholder="https://example.com/project.sb3"
                                        value={this.state.projectUrl}
                                    />
                                    <button
                                        className={styles.secondaryButton}
                                        type="submit"
                                    >
                                        Load URL
                                    </button>
                                </form>
                                <div className={styles.buttonRow}>
                                    <button
                                        className={styles.secondaryButton}
                                        onClick={this.handleFilePicker}
                                    >
                                        Open File
                                    </button>
                                </div>
                                <input
                                    accept=".sb,.sb2,.sb3"
                                    className={styles.hiddenInput}
                                    onChange={this.handleFileChange}
                                    ref={this.fileInputRef}
                                    type="file"
                                />
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Compiler Surface</h2>
                            <div className={styles.toggleList}>
                                <Toggle
                                    checked={this.state.autoStart}
                                    hint="Start the loaded project immediately after load."
                                    label="Autostart"
                                    onChange={() => this.setState(prevState => ({autoStart: !prevState.autoStart}))}
                                />
                                <Toggle
                                    checked={this.state.compilerEnabled}
                                    hint="Toggle the TurboWarp compiler path in the local VM."
                                    label="Compiler"
                                    onChange={this.handleCompilerToggle}
                                />
                                <Toggle
                                    checked={this.state.offloadEnabled}
                                    hint="Enable loop offload planning for eligible code paths."
                                    label="Offload Planner"
                                    onChange={() => this.handleToggleChange('offloadEnabled')}
                                />
                                <Toggle
                                    checked={this.state.wasmEnabled}
                                    hint="Allow eligible hot loops to target the WASM backend."
                                    label="WASM Backend"
                                    onChange={() => this.handleToggleChange('wasmEnabled')}
                                />
                                <Toggle
                                    checked={this.state.webglEnabled}
                                    hint="Allow strict numeric kernels to target WebGL."
                                    label="WebGL Backend"
                                    onChange={() => this.handleToggleChange('webglEnabled')}
                                />
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Runtime Stats</h2>
                            <div className={styles.statsGrid}>
                                <div className={styles.statCard}>
                                    <p className={styles.statLabel}>FPS</p>
                                    <p className={styles.statValue}>{this.state.fps}</p>
                                </div>
                                <div className={styles.statCard}>
                                    <p className={styles.statLabel}>Targets</p>
                                    <p className={styles.statValue}>{this.state.targetCount}</p>
                                </div>
                                <div className={styles.statCard}>
                                    <p className={styles.statLabel}>Compile Errors</p>
                                    <p className={styles.statValue}>{this.state.compileErrors}</p>
                                </div>
                                <div className={styles.statCard}>
                                    <p className={styles.statLabel}>Stage</p>
                                    <p className={styles.statValue}>{this.state.stageSize}</p>
                                </div>
                            </div>
                            <div className={styles.buttonRow}>
                                <span className={`${styles.pill} ${this.state.isRuntimeStarted ? styles.pillActive : ''}`}>
                                    Runtime {this.state.isRuntimeStarted ? 'Started' : 'Stopped'}
                                </span>
                                <span className={styles.pill}>{this.state.isLoading ? 'Loading' : 'Ready'}</span>
                            </div>
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Visible Monitors</h2>
                            {this.renderMonitorList()}
                        </section>

                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Event Log</h2>
                            {this.renderLogList()}
                        </section>
                    </aside>
                </div>
            </div>
        );
    }
}

render(<VMLivePage />);
