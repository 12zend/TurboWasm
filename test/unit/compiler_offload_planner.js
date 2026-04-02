const {test} = require('tap');
const {HotLoopAnalyzer} = require('../../src/compiler/hotloop-analyzer');
const {OffloadPlanner} = require('../../src/compiler/offload-planner');
const {
    IntermediateInput,
    IntermediateRepresentation,
    IntermediateScript,
    IntermediateStack,
    IntermediateStackBlock
} = require('../../src/compiler/intermediate');
const {InputOpcode, InputType, StackOpcode} = require('../../src/compiler/enums');

const makeConstantNumber = value => new IntermediateInput(
    InputOpcode.CONSTANT,
    IntermediateInput.getNumberInputType(value),
    {value}
);

test('HotLoopAnalyzer marks pure warp repeat loops as wasm candidates', t => {
    const variable = {id: 'sum'};
    const loop = new IntermediateStackBlock(StackOpcode.CONTROL_REPEAT, {
        times: makeConstantNumber(512),
        do: new IntermediateStack([
            new IntermediateStackBlock(StackOpcode.VAR_SET, {
                variable,
                value: new IntermediateInput(InputOpcode.OP_ADD, InputType.NUMBER_POS_INT, {
                    left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER_POS_INT, {variable}),
                    right: makeConstantNumber(1)
                })
            })
        ])
    });

    const script = new IntermediateScript();
    script.isWarp = true;
    script.stack = new IntermediateStack([loop]);

    const ir = new IntermediateRepresentation(script, {});
    const hotLoops = new HotLoopAnalyzer(ir).analyze();
    new OffloadPlanner(ir, hotLoops, {
        offload: {
            enabled: true,
            wasm: true,
            webgl: true,
            minWasmIterations: 256,
            minWebGLElements: 4096
        },
        backends: {
            wasm: false,
            webgl: false
        }
    }).plan();

    t.equal(hotLoops.length, 1);
    t.equal(loop.loopSummary.iterationCount.exact, 512);
    t.equal(loop.loopSummary.effectProfile.requiresJSRuntime, false);
    t.equal(loop.loopSummary.numericDomain.pureNumeric, true);
    t.equal(loop.kernelPlan.preferredBackend, 'wasm');
    t.equal(loop.kernelPlan.selectedBackend, 'js');
    t.same(loop.kernelPlan.candidateBackends, ['js', 'wasm']);
    t.match(loop.kernelPlan.reasons, ['wasm-backend-unavailable']);
    t.end();
});

test('HotLoopAnalyzer keeps non-warp timer loops on JS', t => {
    const variable = {id: 'tick'};
    const loop = new IntermediateStackBlock(StackOpcode.CONTROL_WHILE, {
        condition: new IntermediateInput(InputOpcode.OP_LESS, InputType.BOOLEAN, {
            left: new IntermediateInput(InputOpcode.SENSING_TIMER_GET, InputType.NUMBER_POS_REAL, {}),
            right: makeConstantNumber(1)
        }),
        do: new IntermediateStack([
            new IntermediateStackBlock(StackOpcode.VAR_SET, {
                variable,
                value: makeConstantNumber(1)
            })
        ])
    });

    const script = new IntermediateScript();
    script.isWarp = false;
    script.stack = new IntermediateStack([loop]);

    const ir = new IntermediateRepresentation(script, {});
    const hotLoops = new HotLoopAnalyzer(ir).analyze();
    new OffloadPlanner(ir, hotLoops, {
        offload: {
            enabled: true,
            wasm: true,
            webgl: true
        }
    }).plan();

    t.equal(hotLoops.length, 1);
    t.equal(loop.loopSummary.isWarp, false);
    t.equal(loop.loopSummary.effectProfile.hasTimer, true);
    t.equal(loop.loopSummary.effectProfile.requiresJSRuntime, true);
    t.equal(loop.kernelPlan.preferredBackend, 'js');
    t.equal(loop.kernelPlan.selectedBackend, 'js');
    t.match(loop.kernelPlan.reasons, ['non-warp-loop']);
    t.end();
});
