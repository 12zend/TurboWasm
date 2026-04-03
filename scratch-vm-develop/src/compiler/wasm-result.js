// @ts-check

/**
 * @fileoverview Shared helpers for normalizing WASM compilation results.
 */

/**
 * Normalize the compiler output to a tightly packed Uint8Array so callers can
 * safely transfer or compile it without depending on the original view shape.
 * @param {object} result
 * @returns {Uint8Array}
 */
const normalizeWasmBytes = result => {
    if (!result || !result.wasmBytes) {
        throw new Error('Missing WASM bytes');
    }

    if (result.wasmBytes instanceof Uint8Array) {
        const {byteOffset, byteLength, buffer} = result.wasmBytes;
        if (byteOffset === 0 && byteLength === buffer.byteLength) {
            return result.wasmBytes;
        }
        return new Uint8Array(result.wasmBytes);
    }

    if (result.wasmBytes instanceof ArrayBuffer) {
        return new Uint8Array(result.wasmBytes);
    }

    return new Uint8Array(result.wasmBytes.buffer);
};

/**
 * @returns {boolean}
 */
const canCreateWasmModule = () => (
    typeof WebAssembly === 'object' &&
    typeof WebAssembly.Module === 'function'
);

/**
 * Normalize a WASM compiler result so every caller sees the same contract.
 * @param {object} result
 * @returns {object}
 */
const createWasmCompilationResult = result => {
    const wasmBytes = normalizeWasmBytes(result);
    const wasmResult = {
        format: 'wasm',
        wasmBytes,
        variables: result.variables || []
    };

    if (canCreateWasmModule()) {
        wasmResult.wasmModule = new WebAssembly.Module(wasmBytes);
    }

    return wasmResult;
};

/**
 * @param {object} result
 * @returns {Array<ArrayBuffer>}
 */
const getWasmTransferList = result => {
    if (result && result.format === 'wasm' && result.wasmBytes && result.wasmBytes.buffer) {
        return [result.wasmBytes.buffer];
    }
    return [];
};

/**
 * Drop fields that may not survive structured clone.
 * @param {object} result
 * @returns {object}
 */
const stripNonCloneableWasmFields = result => {
    if (!result || result.format !== 'wasm' || !result.wasmModule) {
        return result;
    }

    const cloneableResult = Object.assign({}, result);
    delete cloneableResult.wasmModule;
    return cloneableResult;
};

module.exports = {
    createWasmCompilationResult,
    getWasmTransferList,
    stripNonCloneableWasmFields
};
