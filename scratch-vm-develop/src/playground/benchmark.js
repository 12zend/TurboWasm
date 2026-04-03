const ScratchStorage = require('scratch-storage');
const VirtualMachine = require('..');
const ScratchRender = require('scratch-render');
const AudioEngine = require('scratch-audio');
const ScratchSVGRenderer = require('@turbowarp/scratch-svg-renderer');

const {compileTask} = require('../compiler/compile-task');
const jsexecute = require('../compiler/jsexecute');
const {
    IntermediateInput,
    IntermediateRepresentation,
    IntermediateScript,
    IntermediateStack,
    IntermediateStackBlock
} = require('../compiler/intermediate');
const {InputOpcode, InputType, StackOpcode} = require('../compiler/enums');

const Scratch = window.Scratch = window.Scratch || {};

const ASSET_SERVER = 'https://cdn.assets.scratch.mit.edu/';
const PROJECT_SERVER = 'https://cdn.projects.scratch.mit.edu/';
const PROJECT_TOKEN_SERVER = 'https://trampoline.turbowarp.org/api/projects/';

const DEMO_PROJECTS = {
    'pen': {
        label: 'TurboWasm Pen Demo',
        url: './fixtures/turbowasm-pen-demo.sb3',
        notes: 'Bundled local demo with a live Pen loop plus a numeric kernel that exercises the WASM compiler path.'
    },
    'pen-heavy': {
        label: 'Pen Dolphin 3D',
        url: './fixtures/pen-dolphin-3d.sb3',
        notes: 'Bundled heavier Pen scene for stress testing.'
    }
};

const canvas = document.getElementById('scratch-stage');
const fileInput = document.getElementById('file-input');
const importBtn = document.getElementById('import-sb3');
const loadPenDemoBtn = document.getElementById('load-pen-demo');
const loadHeavyPenDemoBtn = document.getElementById('load-heavy-pen-demo');
const runBtn = document.getElementById('run-btn');
const stopBtn = document.getElementById('stop-btn');
const benchmarkBtn = document.getElementById('benchmark-btn');

const runtimeStateEl = document.getElementById('runtime-state');
const compilerModeEl = document.getElementById('compiler-mode');
const wasmSupportEl = document.getElementById('wasm-support');
const assetProgressEl = document.getElementById('asset-progress');
const compileStatusEl = document.getElementById('compile-status');
const penStatusEl = document.getElementById('pen-status');
const projectStatusEl = document.getElementById('project-status');
const targetStatusEl = document.getElementById('target-status');
const threadStatusEl = document.getElementById('thread-status');
const fpsValueEl = document.getElementById('fps-value');
const benchmarkResultEl = document.getElementById('benchmark-result');
const benchmarkNotesEl = document.getElementById('benchmark-notes');
const demoNotesEl = document.getElementById('demo-notes');
const logEl = document.getElementById('event-log');

const vm = new VirtualMachine();
Scratch.vm = vm;

vm.setCompilerOptions({
    enabled: true,
    useWasm: true
});
vm.setTurboMode(true);

const storage = new ScratchStorage();
const AssetType = storage.AssetType;
storage.addWebSource([AssetType.Project], asset => {
    const assetIdParts = asset.assetId.split('.');
    const assetUrlParts = [PROJECT_SERVER, 'internalapi/project/', assetIdParts[0], '/get/'];
    if (assetIdParts[1]) {
        assetUrlParts.push(assetIdParts[1]);
    }
    return assetUrlParts.join('');
});
storage.addWebSource([AssetType.ImageVector, AssetType.ImageBitmap, AssetType.Sound], asset => [
    ASSET_SERVER,
    'internalapi/asset/',
    asset.assetId,
    '.',
    asset.dataFormat,
    '/get/'
].join(''));

vm.attachStorage(storage);

const renderer = new ScratchRender(canvas);
Scratch.renderer = renderer;
vm.attachRenderer(renderer);

const audioEngine = new AudioEngine();
vm.attachAudioEngine(audioEngine);
vm.attachV2BitmapAdapter(new ScratchSVGRenderer.BitmapAdapter());

const uiState = {
    compileEvents: 0,
    lastCompilation: null,
    logLines: [],
    currentProjectLabel: 'No project loaded',
    benchmarkRunning: false
};

const MAX_LOG_LINES = 18;

const appendLog = message => {
    const timestamp = new Date().toLocaleTimeString();
    uiState.logLines.unshift(`[${timestamp}] ${message}`);
    uiState.logLines = uiState.logLines.slice(0, MAX_LOG_LINES);
    logEl.textContent = uiState.logLines.join('\n');
};

const setText = (element, text) => {
    element.textContent = text;
};

const setRuntimeState = value => {
    setText(runtimeStateEl, value);
};

const updateCompilerMode = () => {
    const compilerOptions = vm.runtime.compilerOptions;
    const mode = compilerOptions.useWasm ? 'Compiler on / WASM preferred' : 'Compiler on / JS only';
    setText(compilerModeEl, mode);
};

const updateSupportState = () => {
    setText(wasmSupportEl, typeof WebAssembly === 'object' ? 'WebAssembly available' : 'WebAssembly unavailable');
};

const updateAssetProgress = (finished = vm.runtime.finishedAssetRequests, total = vm.runtime.totalAssetRequests) => {
    if (!total) {
        setText(assetProgressEl, 'No asset transfers in flight');
        return;
    }
    setText(assetProgressEl, `${finished} / ${total} assets loaded`);
};

const formatCompilationStatus = status => {
    if (!status) {
        return 'No scripts compiled yet';
    }

    const procedureSummary = Object.keys(status.procedureFormats).length ?
        Object.entries(status.procedureFormats)
            .map(([name, format]) => `${name}: ${format}`)
            .join(', ') :
        'none';

    return [
        `entry=${status.entryFormat}`,
        `wasm=${status.wasmScriptCount}`,
        `js=${status.jsScriptCount}`,
        `procedures=${procedureSummary}`
    ].join(' | ');
};

const updateCompileStatus = () => {
    if (!uiState.lastCompilation) {
        setText(compileStatusEl, 'No compilations observed yet');
        return;
    }

    setText(
        compileStatusEl,
        `${formatCompilationStatus(uiState.lastCompilation)} | events=${uiState.compileEvents}`
    );
};

const getProjectName = () => {
    const stage = vm.runtime.getTargetForStage();
    if (!stage) {
        return uiState.currentProjectLabel;
    }
    const stageName = stage.getName ? stage.getName() : 'Stage';
    return `${uiState.currentProjectLabel} (${stageName})`;
};

const updateProjectStatus = () => {
    setText(projectStatusEl, getProjectName());
};

const updatePenStatus = () => {
    const penLoaded = vm.extensionManager.isExtensionLoaded('pen');
    const rendererAttached = Boolean(vm.runtime.renderer);
    setText(
        penStatusEl,
        penLoaded ?
            `Pen ready via renderer=${rendererAttached ? 'yes' : 'no'}` :
            'Pen extension not loaded'
    );
};

const updateTargetStatus = () => {
    const targets = vm.runtime.targets
        .filter(target => !target.isStage)
        .map(target => target.getName());
    setText(targetStatusEl, targets.length ? targets.join(', ') : 'No sprite targets');
};

const updateThreadStatus = () => {
    const activeThreads = vm.runtime.threads.filter(thread => !thread.updateMonitor && !thread.isKilled);
    setText(threadStatusEl, `${activeThreads.length} active runtime threads`);
};

const refreshStatus = () => {
    updateCompilerMode();
    updateSupportState();
    updateAssetProgress();
    updateCompileStatus();
    updateProjectStatus();
    updatePenStatus();
    updateTargetStatus();
    updateThreadStatus();
};

const resetCompilationTracking = () => {
    uiState.compileEvents = 0;
    uiState.lastCompilation = null;
    updateCompileStatus();
};

const postMouseData = (event, isDown) => {
    const rect = canvas.getBoundingClientRect();
    const data = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        canvasWidth: rect.width,
        canvasHeight: rect.height
    };
    if (typeof isDown !== 'undefined') {
        data.isDown = isDown;
    }
    vm.postIOData('mouse', data);
};

canvas.addEventListener('mousemove', event => postMouseData(event));
canvas.addEventListener('mousedown', event => postMouseData(event, true));
document.addEventListener('mouseup', event => postMouseData(event, false));

document.addEventListener('keydown', event => {
    if (event.target !== document.body && event.target !== document.documentElement) {
        return;
    }
    vm.postIOData('keyboard', {
        key: event.key,
        keyCode: event.keyCode,
        isDown: true
    });
    if (event.key === ' ' || event.keyCode === 32) {
        event.preventDefault();
    }
});

document.addEventListener('keyup', event => {
    vm.postIOData('keyboard', {
        key: event.key,
        keyCode: event.keyCode,
        isDown: false
    });
    if (event.key === ' ' || event.keyCode === 32) {
        event.preventDefault();
    }
});

let lastFpsUpdate = performance.now();
let frameCount = 0;
const updateFPS = () => {
    const now = performance.now();
    frameCount++;
    if (now - lastFpsUpdate >= 1000) {
        setText(fpsValueEl, `${frameCount} fps`);
        frameCount = 0;
        lastFpsUpdate = now;
        updateThreadStatus();
    }
    window.requestAnimationFrame(updateFPS);
};

const getProjectMetadata = async projectId => {
    const response = await fetch(`${PROJECT_TOKEN_SERVER}${projectId}`);
    if (!response.ok) {
        throw new Error(`Unable to fetch metadata for project ${projectId}: HTTP ${response.status}`);
    }
    return response.json();
};

const getProjectData = async projectId => {
    const metadata = await getProjectMetadata(projectId);
    const token = metadata.project_token;
    const response = await fetch(`https://projects.scratch.mit.edu/${projectId}?token=${token}`);
    if (!response.ok) {
        throw new Error(`Unable to fetch project ${projectId}: HTTP ${response.status}`);
    }
    return response.arrayBuffer();
};

const handleLoadFailure = error => {
    console.error(error);
    setRuntimeState('Load failed');
    appendLog(`Load failure: ${error.message}`);
};

const loadProjectFromBuffer = async (buffer, label, notes) => {
    try {
        uiState.currentProjectLabel = label;
        setRuntimeState('Loading project');
        setText(demoNotesEl, notes || '');
        resetCompilationTracking();
        updateAssetProgress(0, 0);
        appendLog(`Loading project: ${label}`);
        await vm.loadProject(buffer);
        refreshStatus();
        vm.greenFlag();
        setRuntimeState('Running');
        appendLog(`Project running: ${label}`);
    } catch (error) {
        handleLoadFailure(error);
    }
};

const loadBundledDemo = async demoId => {
    const demo = DEMO_PROJECTS[demoId];
    if (!demo) {
        throw new Error(`Unknown bundled demo: ${demoId}`);
    }

    setRuntimeState('Fetching bundled demo');
    appendLog(`Fetching bundled demo: ${demo.label}`);
    const response = await fetch(demo.url);
    if (!response.ok) {
        throw new Error(`Unable to fetch bundled demo ${demo.url}: HTTP ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    await loadProjectFromBuffer(buffer, demo.label, demo.notes);
};

const loadRemoteProject = async projectId => {
    setRuntimeState(`Fetching project ${projectId}`);
    appendLog(`Fetching remote project: ${projectId}`);
    const buffer = await getProjectData(projectId);
    await loadProjectFromBuffer(buffer, `Remote ${projectId}`, 'Project fetched from projects.scratch.mit.edu.');
};

const makeKernelIR = iterations => {
    const counter = {id: 'counter', name: 'counter'};
    const script = new IntermediateScript();
    script.yields = false;
    script.isWarp = true;
    script.stack = new IntermediateStack([
        new IntermediateStackBlock(StackOpcode.VAR_SET, {
            variable: counter,
            value: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                value: 0
            })
        }),
        new IntermediateStackBlock(StackOpcode.CONTROL_REPEAT, {
            times: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                value: iterations
            }),
            do: new IntermediateStack([
                new IntermediateStackBlock(StackOpcode.VAR_SET, {
                    variable: counter,
                    value: new IntermediateInput(InputOpcode.OP_ADD, InputType.NUMBER, {
                        left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                            variable: counter
                        }),
                        right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                            value: 3
                        })
                    })
                }),
                new IntermediateStackBlock(StackOpcode.CONTROL_IF_ELSE, {
                    condition: new IntermediateInput(InputOpcode.OP_GREATER, InputType.BOOLEAN, {
                        left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                            variable: counter
                        }),
                        right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                            value: 1000
                        })
                    }),
                    whenTrue: new IntermediateStack([
                        new IntermediateStackBlock(StackOpcode.VAR_SET, {
                            variable: counter,
                            value: new IntermediateInput(InputOpcode.OP_SUBTRACT, InputType.NUMBER, {
                                left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                                    variable: counter
                                }),
                                right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                                    value: 1000
                                })
                            })
                        })
                    ]),
                    whenFalse: new IntermediateStack([
                        new IntermediateStackBlock(StackOpcode.VAR_SET, {
                            variable: counter,
                            value: new IntermediateInput(InputOpcode.OP_ADD, InputType.NUMBER, {
                                left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                                    variable: counter
                                }),
                                right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                                    value: 1
                                })
                            })
                        })
                    ])
                })
            ])
        })
    ]);
    return new IntermediateRepresentation(script, {});
};

const makeBenchmarkThread = variable => {
    const stage = {
        variables: {
            [variable.id]: variable
        }
    };
    const runtime = {
        getTargetForStage: () => stage,
        ioDevices: {
            cloud: {
                requestUpdateVariable: () => {}
            }
        },
        requestRedraw: () => {},
        ext_pen: null,
        visualReport: () => {},
        sequencer: {
            timer: {
                timeElapsed: () => 0
            },
            retireThread: () => {}
        }
    };
    const target = {
        runtime,
        sprite: {
            clones: []
        },
        blocks: {
            getBlock: () => null
        },
        effects: {},
        getName: () => 'BenchmarkSprite',
        lookupVariableById: id => (id === variable.id ? variable : null),
        lookupOrCreateVariable: () => variable
    };
    return {
        target,
        procedures: {},
        status: 0,
        stackFrames: [],
        atStackTop: () => true
    };
};

const measureKernel = (runner, rounds) => {
    for (let i = 0; i < 3; i++) {
        runner();
    }

    const samples = [];
    let lastResult = null;
    for (let i = 0; i < rounds; i++) {
        const start = performance.now();
        lastResult = runner();
        samples.push(performance.now() - start);
    }

    const total = samples.reduce((sum, value) => sum + value, 0);
    return {
        average: total / samples.length,
        result: lastResult
    };
};

const runKernelBenchmark = () => {
    if (uiState.benchmarkRunning) {
        return;
    }

    uiState.benchmarkRunning = true;
    benchmarkBtn.disabled = true;
    setText(benchmarkResultEl, 'Running synthetic kernel benchmark...');
    setText(benchmarkNotesEl, 'This compares the current JS fallback path and the current WASM path in-browser.');
    appendLog('Starting synthetic kernel benchmark');

    try {
        const iterations = 250000;
        const rounds = 10;
        const ir = makeKernelIR(iterations);
        const targetData = {
            name: 'BenchmarkSprite',
            debug: false,
            isStage: false,
            effects: {}
        };

        const jsResult = compileTask({
            script: ir.entry,
            ir,
            targetData,
            useWasm: false
        });
        const jsFactory = jsexecute.scopedEval(jsResult.factorySource);

        const wasmResult = compileTask({
            script: ir.entry,
            ir,
            targetData,
            useWasm: true
        });

        if (wasmResult.format !== 'wasm') {
            throw new Error('Synthetic kernel did not compile to wasm');
        }

        const runJsKernel = () => {
            const variable = {
                id: 'counter',
                name: 'counter',
                value: 0,
                isCloud: false
            };
            const thread = makeBenchmarkThread(variable);
            jsexecute.withThread(thread, () => jsFactory(thread)());
            return variable.value;
        };

        const runWasmKernel = () => {
            const memory = new WebAssembly.Memory({initial: 1});
            const instance = new WebAssembly.Instance(wasmResult.wasmModule, {
                env: {
                    memory,
                    requestRedraw: () => {}
                }
            });
            const numericMemory = new Float64Array(memory.buffer);
            numericMemory[wasmResult.variables[0].offset >>> 3] = 0;
            instance.exports.run();
            return numericMemory[wasmResult.variables[0].offset >>> 3];
        };

        const jsSanity = runJsKernel();
        const wasmSanity = runWasmKernel();
        if (jsSanity !== wasmSanity) {
            throw new Error(`Benchmark mismatch: js=${jsSanity}, wasm=${wasmSanity}`);
        }

        const jsMetrics = measureKernel(runJsKernel, rounds);
        const wasmMetrics = measureKernel(runWasmKernel, rounds);
        const speedup = jsMetrics.average / wasmMetrics.average;
        const resultSummary = [
            `JS ${jsMetrics.average.toFixed(3)} ms`,
            `WASM ${wasmMetrics.average.toFixed(3)} ms`,
            `speedup ${speedup.toFixed(2)}x`
        ].join(' | ');
        setText(
            benchmarkResultEl,
            resultSummary
        );
        setText(
            benchmarkNotesEl,
            speedup > 1 ?
                'Current numeric kernel is faster in WASM.' :
                'Current numeric kernel is not yet faster in WASM; further optimizer work is needed.'
        );
        appendLog(`Kernel benchmark finished with ${speedup.toFixed(2)}x speedup`);
    } catch (error) {
        console.error(error);
        setText(benchmarkResultEl, `Benchmark failed: ${error.message}`);
        setText(benchmarkNotesEl, 'Benchmark failure left the runtime intact; check the log for details.');
        appendLog(`Benchmark failure: ${error.message}`);
    } finally {
        uiState.benchmarkRunning = false;
        benchmarkBtn.disabled = false;
    }
};

vm.on('ASSET_PROGRESS', (finished, total) => {
    updateAssetProgress(finished, total);
});

vm.on('COMPILER_OPTIONS_CHANGED', () => {
    updateCompilerMode();
    appendLog('Compiler options changed');
});

vm.on('COMPILE_ERROR', (target, error) => {
    setRuntimeState('Compile error');
    appendLog(`Compile error in ${target.getName()}: ${error.message}`);
});

vm.on('TURBOWASM_STATUS', status => {
    uiState.compileEvents++;
    uiState.lastCompilation = status;
    updateCompileStatus();
    if (status.jsScriptCount > 0) {
        appendLog(`WASM fallback detected for ${status.targetName}: ${formatCompilationStatus(status)}`);
    } else {
        appendLog(`WASM compile succeeded for ${status.targetName}: ${formatCompilationStatus(status)}`);
    }
});

vm.on('PROJECT_START', () => {
    setRuntimeState('Project start');
});

vm.on('PROJECT_RUN_START', () => {
    setRuntimeState('Running');
});

vm.on('PROJECT_RUN_STOP', () => {
    setRuntimeState('Stopped');
});

vm.on('RUNTIME_STARTED', () => {
    setRuntimeState('Runtime ready');
});

vm.on('RUNTIME_STOPPED', () => {
    setRuntimeState('Runtime stopped');
});

vm.on('EXTENSION_ADDED', () => {
    updatePenStatus();
});

runBtn.addEventListener('click', () => {
    vm.greenFlag();
    setRuntimeState('Running');
    appendLog('Green flag triggered');
});

stopBtn.addEventListener('click', () => {
    vm.stopAll();
    setRuntimeState('Stopped');
    appendLog('Stop all triggered');
});

benchmarkBtn.addEventListener('click', () => {
    runKernelBenchmark();
});

loadPenDemoBtn.addEventListener('click', () => {
    loadBundledDemo('pen').catch(handleLoadFailure);
});

loadHeavyPenDemoBtn.addEventListener('click', () => {
    loadBundledDemo('pen-heavy').catch(handleLoadFailure);
});

importBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', event => {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = () => {
        loadProjectFromBuffer(reader.result, file.name, 'Loaded from a local sb3 file.').catch(handleLoadFailure);
    };
    reader.readAsArrayBuffer(file);
});

const loadInitialProject = async () => {
    const params = new URLSearchParams(window.location.search);
    const remoteProject = params.get('project');
    const demoId = params.get('demo') || 'pen';

    if (remoteProject) {
        await loadRemoteProject(remoteProject);
        return;
    }

    if (demoId === 'none') {
        setRuntimeState('Idle');
        setText(demoNotesEl, 'No demo auto-loaded. Use the buttons above to import or load a bundled Pen project.');
        return;
    }

    await loadBundledDemo(demoId);
};

vm.start();
updateFPS();
refreshStatus();
appendLog('TurboWasm playground booted');

loadInitialProject()
    .then(refreshStatus)
    .catch(handleLoadFailure);
