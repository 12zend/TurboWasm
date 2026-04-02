const ScratchStorage = require('scratch-storage');
const VirtualMachine = require('..');
const ScratchRender = require('scratch-render');
const AudioEngine = require('scratch-audio');
const ScratchSVGRenderer = require('@turbowarp/scratch-svg-renderer');

const Scratch = window.Scratch = window.Scratch || {};

const ASSET_SERVER = 'https://cdn.assets.scratch.mit.edu/';
const PROJECT_SERVER = 'https://cdn.projects.scratch.mit.edu/';

const canvas = document.getElementById('scratch-stage');
const fpsValue = document.getElementById('fps-value');
const runBtn = document.getElementById('run-btn');
const stopBtn = document.getElementById('stop-btn');
const importBtn = document.getElementById('import-sb3');
const fileInput = document.getElementById('file-input');

// Initialize VM
const vm = new VirtualMachine();
Scratch.vm = vm;

// Stage 3: Always enable compiler and turbo mode
vm.setCompilerOptions({
    enabled: true
});
vm.setTurboMode(true);

// Initialize storage
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
storage.addWebSource([AssetType.ImageVector, AssetType.ImageBitmap, AssetType.Sound], asset => {
    return [
        ASSET_SERVER,
        'internalapi/asset/',
        asset.assetId,
        '.',
        asset.dataFormat,
        '/get/'
    ].join('');
});
vm.attachStorage(storage);

// Initialize renderer
const renderer = new ScratchRender(canvas);
Scratch.renderer = renderer;
vm.attachRenderer(renderer);
const audioEngine = new AudioEngine();
vm.attachAudioEngine(audioEngine);
vm.attachV2BitmapAdapter(new ScratchSVGRenderer.BitmapAdapter());

// Mouse events
const postMouseData = (e, isDown) => {
    const rect = canvas.getBoundingClientRect();
    const data = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        canvasWidth: rect.width,
        canvasHeight: rect.height
    };
    if (typeof isDown !== 'undefined') {
        data.isDown = isDown;
    }
    vm.postIOData('mouse', data);
};

canvas.addEventListener('mousemove', e => postMouseData(e));
canvas.addEventListener('mousedown', e => postMouseData(e, true));
document.addEventListener('mouseup', e => postMouseData(e, false));

// Stage 1: Fixed keyboard input
document.addEventListener('keydown', e => {
    if (e.target !== document && e.target !== document.body) {
        return;
    }
    vm.postIOData('keyboard', {
        key: e.key,
        keyCode: e.keyCode,
        isDown: true
    });
    // Prevent space from scrolling the page
    if (e.key === ' ' || e.keyCode === 32) {
        e.preventDefault();
    }
});

document.addEventListener('keyup', e => {
    vm.postIOData('keyboard', {
        key: e.key,
        keyCode: e.keyCode,
        isDown: false
    });
    if (e.target !== document && e.target !== document.body) {
        if (e.key === ' ' || e.keyCode === 32) {
            e.preventDefault();
        }
    }
});

// Stage 5: FPS counter
let lastStepTime = performance.now();
let frameCount = 0;
const updateFPS = () => {
    const now = performance.now();
    frameCount++;
    if (now - lastStepTime >= 1000) {
        fpsValue.innerText = frameCount;
        frameCount = 0;
        lastStepTime = now;
    }
    requestAnimationFrame(updateFPS);
};
updateFPS();

// Controls
runBtn.addEventListener('click', () => {
    vm.greenFlag();
});

stopBtn.addEventListener('click', () => {
    vm.stopAll();
});

// Project loading logic
const getProjectMetadata = async projectId => {
    const response = await fetch(`https://trampoline.turbowarp.org/api/projects/${projectId}`);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    return await response.json();
};

const getProjectData = async projectId => {
    const metadata = await getProjectMetadata(projectId);
    const token = metadata.project_token;
    const response = await fetch(`https://projects.scratch.mit.edu/${projectId}?token=${token}`);
    if (!response.ok) throw new Error(`HTTP error ${response.status}`);
    return await response.arrayBuffer();
};

const loadProjectById = async id => {
    try {
        const data = await getProjectData(id);
        await vm.loadProject(data);
        vm.greenFlag();
    } catch (e) {
        console.error('Failed to load project:', e);
        alert('Failed to load project. It might be unshared or private.');
    }
};

// Stage 4: Local file support
importBtn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    currentProjectId = null;
    const reader = new FileReader();
    reader.onload = async () => {
        await vm.loadProject(reader.result);
        vm.greenFlag();
    };
    reader.readAsArrayBuffer(file);
});

// Initialization based on URL
let currentProjectId = null;
const init = async () => {
    let projectId = location.hash.substring(1).split(',')[0];
    if (!projectId) {
        const params = new URLSearchParams(location.search);
        projectId = params.get('project');
    }

    if (projectId && /^\d+$/.test(projectId)) {
        currentProjectId = projectId;
        importBtn.style.display = 'none';
        await loadProjectById(projectId);
    } else {
        importBtn.style.display = 'inline-block';
    }
};

// Stage 3: Auto-reload on tab switch
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && currentProjectId) {
        loadProjectById(currentProjectId);
    }
});

vm.start();
init();
