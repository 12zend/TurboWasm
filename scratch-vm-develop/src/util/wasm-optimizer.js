/**
 * @fileoverview
 * Utility to manage WebAssembly-based optimizations.
 */

class WasmOptimizer {
    constructor () {
        this.wasm = null;
        this.ready = false;
    }

    async init () {
        if (this.ready) return;
        
        try {
            // Minimal valid WASM module:
            // (module
            //   (func (export "toNumber") (param f64) (result f64)
            //     local.get 0
            //   )
            // )
            const wasmCode = new Uint8Array([
                0, 97, 115, 109, 1, 0, 0, 0,
                1, 6, 1, 96, 1, 124, 1, 124,
                3, 2, 1, 0,
                7, 12, 1, 8, 116, 111, 78, 117, 109, 98, 101, 114, 0, 0,
                10, 6, 1, 4, 0, 32, 0, 11
            ]);

            const {instance} = await WebAssembly.instantiate(wasmCode);
            this.wasm = instance.exports;
            this.ready = true;
        } catch (e) {
            console.warn('WASM initialization failed, falling back to JS', e);
        }
    }

    toNumber (val) {
        if (typeof val === 'number' && Number.isNaN(val)) {
            return 0;
        }
        if (this.ready && typeof val === 'number') {
            return this.wasm.toNumber(val);
        }
        // Fallback to JS logic
        if (typeof val === 'number') {
            return Number.isNaN(val) ? 0 : val;
        }
        const n = Number(val);
        return Number.isNaN(n) ? 0 : n;
    }
}

module.exports = new WasmOptimizer();
