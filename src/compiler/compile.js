// @ts-check

const {IRGenerator} = require('./irgen');
const {IROptimizer} = require('./iroptimizer');
const {HotLoopAnalyzer} = require('./hotloop-analyzer');
const {OffloadPlanner} = require('./offload-planner');
const JSGenerator = require('./jsgen');

const compile = (/** @type {import("../engine/thread")} */ thread) => {
    const irGenerator = new IRGenerator(thread);
    const ir = irGenerator.generate();

    const irOptimizer = new IROptimizer(ir);
    irOptimizer.optimize();

    const hotLoopAnalyzer = new HotLoopAnalyzer(ir);
    const hotLoops = hotLoopAnalyzer.analyze();

    const offloadPlanner = new OffloadPlanner(ir, hotLoops, {
        offload: thread.target.runtime.compilerOptions.offload,
        backends: {
            wasm: false,
            webgl: false
        }
    });
    const plans = offloadPlanner.plan();

    const procedures = {};
    const target = thread.target;

    const compileScript = (/** @type {import("./intermediate").IntermediateScript} */ script) => {
        if (script.cachedCompileResult) {
            return script.cachedCompileResult;
        }

        const compiler = new JSGenerator(script, ir, target, plans);
        const result = compiler.compile();
        script.cachedCompileResult = result;
        return result;
    };

    const entry = compileScript(ir.entry);

    for (const procedureVariant of Object.keys(ir.procedures)) {
        const procedureData = ir.procedures[procedureVariant];
        const procedureTree = compileScript(procedureData);
        procedures[procedureVariant] = procedureTree;
    }

    return {
        startingFunction: entry,
        procedures,
        executableHat: ir.entry.executableHat,
        offloadPlans: plans
    };
};

module.exports = compile;
