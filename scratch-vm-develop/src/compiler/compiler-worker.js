// @ts-check

const {compileTask} = require('./compile-task');
const {
    getWasmTransferList,
    stripNonCloneableWasmFields
} = require('./wasm-result');

let canCloneWasmModule = null;

const supportsWasmModuleClone = result => {
    if (!result || result.format !== 'wasm' || !result.wasmModule) {
        return true;
    }

    if (canCloneWasmModule !== null) {
        return canCloneWasmModule;
    }

    if (typeof MessageChannel !== 'function') {
        canCloneWasmModule = false;
        return canCloneWasmModule;
    }

    try {
        const channel = new MessageChannel();
        channel.port1.postMessage(result.wasmModule);
        channel.port1.close();
        channel.port2.close();
        canCloneWasmModule = true;
    } catch (e) {
        canCloneWasmModule = false;
    }

    return canCloneWasmModule;
};

const normalizeCompileResult = result => (
    supportsWasmModuleClone(result) ? result : stripNonCloneableWasmFields(result)
);

const getTransferList = result => {
    if (Array.isArray(result)) {
        return result.flatMap(getWasmTransferList);
    }
    return getWasmTransferList(result);
};

/**
 * @fileoverview Web Worker for Scratch compilation.
 */
self.onmessage = event => {
    try {
        const result = Array.isArray(event.data.tasks) ?
            event.data.tasks.map(task => compileTask(task)) :
            compileTask(event.data);
        const normalizedResult = Array.isArray(result) ?
            result.map(normalizeCompileResult) :
            normalizeCompileResult(result);
        const response = {
            success: true,
            result: normalizedResult
        };
        const transferList = getTransferList(normalizedResult);
        self.postMessage(response, transferList);
    } catch (e) {
        self.postMessage({success: false, error: e.stack});
    }
};
