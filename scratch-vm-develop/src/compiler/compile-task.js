// @ts-check

const JSGenerator = require('./jsgen');
const WasmGenerator = require('./wasmgen');

class MockTarget {
    constructor (data) {
        this.data = data;
        this.runtime = {
            debug: data.debug
        };
        this.effects = data.effects || {};
        this.isStage = data.isStage;
    }

    getName () {
        return this.data.name;
    }
}

/**
 * Compile a single IR script into a JS or WASM artifact.
 * @param {object} task
 * @returns {object}
 */
const compileTask = task => {
    const {script, ir, targetData, useWasm} = task;
    const target = new MockTarget(targetData);

    if (useWasm && typeof WebAssembly === 'object') {
        try {
            const wasmCompiler = new WasmGenerator(script, ir, target);
            if (wasmCompiler.supportsScript()) {
                return wasmCompiler.compile();
            }
        } catch (e) {
            // Fall through to JS when the WASM path rejects a script.
        }
    }

    const jsCompiler = new JSGenerator(script, ir, target);
    const factory = jsCompiler.compile();
    return {
        format: 'js',
        factorySource: factory.factorySource
    };
};

module.exports = {
    compileTask
};
