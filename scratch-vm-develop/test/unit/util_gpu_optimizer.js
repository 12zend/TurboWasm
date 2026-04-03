const {test} = require('tap');

const gpuOptimizer = require('../../src/util/gpu-optimizer');

test('selectDistanceBackend prefers CPU when WebGL is unavailable', t => {
    gpuOptimizer.ready = false;
    t.equal(gpuOptimizer.selectDistanceBackend({pointCount: 100000}), 'cpu');
    t.end();
});

test('selectDistanceBackend avoids GPU for small readback-heavy batches', t => {
    gpuOptimizer.ready = true;
    t.equal(gpuOptimizer.selectDistanceBackend({
        pointCount: gpuOptimizer.minimumBatchSize - 1,
        requiresReadback: true,
        arithmeticIntensity: 1
    }), 'cpu');
    t.end();
});

test('selectDistanceBackend enables GPU only when the batch amortizes transfer cost', t => {
    gpuOptimizer.ready = true;
    t.equal(gpuOptimizer.selectDistanceBackend({
        pointCount: gpuOptimizer.minimumBatchSize,
        requiresReadback: true,
        arithmeticIntensity: 1
    }), 'gpu');
    t.equal(gpuOptimizer.selectDistanceBackend({
        pointCount: gpuOptimizer.minimumBatchSize / 2,
        requiresReadback: false,
        arithmeticIntensity: 2
    }), 'gpu');
    t.end();
});
