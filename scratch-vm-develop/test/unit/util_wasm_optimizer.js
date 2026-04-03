const test = require('tap').test;
const wasmOptimizer = require('../../src/util/wasm-optimizer');

test('wasm optimizer initializes a valid module', async t => {
    await wasmOptimizer.init();
    t.equal(wasmOptimizer.ready, true);
    t.equal(wasmOptimizer.toNumber(4.5), 4.5);
    t.equal(wasmOptimizer.toNumber(NaN), 0);
});
