// @ts-check

const {IRGenerator} = require('./irgen');
const {IROptimizer} = require('./iroptimizer');
const compilerWorkerProxy = require('./compiler-worker-proxy');
const jsexecute = require('./jsexecute');

/**
 * @typedef {Object} CompiledScript
 * @property {Function} startingFunction
 * @property {Object.<string, Function>} procedures
 * @property {boolean} executableHat
 */

/**
 * @param {import("../engine/thread")} thread
 * @returns {Promise<CompiledScript> | CompiledScript}
 */
const compile = (thread) => {
    const irGenerator = new IRGenerator(thread);
    const ir = irGenerator.generate();

    const irOptimizer = new IROptimizer(ir);
    irOptimizer.optimize();

    const target = thread.target;
    const useWasm = target.runtime.compilerOptions && target.runtime.compilerOptions.useWasm;
    
    const targetData = {
        name: target.getName(),
        debug: target.runtime.debug,
        isStage: target.isStage,
        effects: target.effects
    };

    // Helper to recreate functions from worker data
    const createFactory = (data) => {
        if (data.wasmBytes) {
            const wasmBytes = data.wasmBytes;
            return (thread) => {
                return () => {
                    const memory = new WebAssembly.Memory({ initial: 1 });
                    const instance = new WebAssembly.Instance(new WebAssembly.Module(wasmBytes), {
                        env: {
                            memory: memory
                        }
                    });
                    return {
                        next: () => {
                            const status = instance.exports.run();
                            if (status === 0) return { done: true };
                            return { done: false };
                        }
                    };
                };
            };
        } else if (data.factorySource) {
            return jsexecute.scopedEval(data.factorySource);
        }
        throw new Error('Invalid worker result');
    };

    return compilerWorkerProxy.compile({
        script: ir.entry,
        ir: ir,
        targetData,
        useWasm
    }).then(entryResult => {
        const entry = createFactory(entryResult);
        const procedures = {};
        const procedurePromises = [];

        for (const procedureVariant of Object.keys(ir.procedures)) {
            const procedureData = ir.procedures[procedureVariant];
            procedurePromises.push(
                compilerWorkerProxy.compile({
                    script: procedureData,
                    ir: ir,
                    targetData,
                    useWasm
                }).then(procResult => {
                    procedures[procedureVariant] = createFactory(procResult);
                })
            );
        }

        return Promise.all(procedurePromises).then(() => ({
            startingFunction: entry,
            procedures,
            executableHat: ir.entry.executableHat
        }));
    });
};

module.exports = compile;
