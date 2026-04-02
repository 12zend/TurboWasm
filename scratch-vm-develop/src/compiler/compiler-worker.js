// @ts-check

const JSGenerator = require('./jsgen');
const WasmGenerator = require('./wasmgen');

/**
 * @fileoverview Web Worker for Scratch compilation.
 */

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

self.onmessage = (event) => {
    const {script, ir, targetData, useWasm} = event.data;
    const target = new MockTarget(targetData);
    
    try {
        if (useWasm) {
            const compiler = new WasmGenerator(script, ir, target);
            const factory = compiler.compile();
            self.postMessage({
                success: true,
                wasmBytes: factory.wasmBytes
            });
        } else {
            const compiler = new JSGenerator(script, ir, target);
            const factory = compiler.compile();
            self.postMessage({
                success: true,
                factorySource: factory.factorySource
            });
        }
    } catch (e) {
        self.postMessage({success: false, error: e.stack});
    }
};
