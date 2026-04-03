// @ts-check

const {IRGenerator} = require('./irgen');
const {IROptimizer} = require('./iroptimizer');
const compilerWorkerProxy = require('./compiler-worker-proxy');
const jsexecute = require('./jsexecute');
const Cast = require('../util/cast');

const wasmModuleCache = typeof WeakMap === 'function' ? new WeakMap() : null;

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
const compile = thread => {
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

    const readVariable = (runtimeThread, variableInfo) => {
        const variable = runtimeThread.target.lookupVariableById(variableInfo.id);
        if (!variable) {
            return 0;
        }
        return Cast.toNumber(variable.value);
    };

    const writeVariable = (runtimeThread, variableInfo, value) => {
        const variable = runtimeThread.target.lookupVariableById(variableInfo.id);
        if (!variable) {
            return;
        }
        variable.value = value;
        if (variable.isCloud) {
            runtimeThread.target.runtime.ioDevices.cloud.requestUpdateVariable(variable.name, value);
        }
    };

    const getWasmModuleCacheKey = data => {
        if (!data.wasmBytes) {
            return null;
        }
        if (data.wasmBytes instanceof ArrayBuffer) {
            return data.wasmBytes;
        }
        return data.wasmBytes.buffer || null;
    };

    const loadWasmModule = data => {
        if (data.wasmModule) {
            return Promise.resolve(data.wasmModule);
        }
        if (data.wasmBytes) {
            const cacheKey = getWasmModuleCacheKey(data);
            if (wasmModuleCache && cacheKey) {
                let cachedModule = wasmModuleCache.get(cacheKey);
                if (!cachedModule) {
                    cachedModule = WebAssembly.compile(data.wasmBytes);
                    wasmModuleCache.set(cacheKey, cachedModule);
                }
                return cachedModule;
            }
            return WebAssembly.compile(data.wasmBytes);
        }
        return Promise.reject(new Error('Missing WASM module and bytes'));
    };

    const createWasmFactory = async data => {
        const module = await loadWasmModule(data);
        const variables = data.variables || [];
        return runtimeThread => () => {
            const memory = new WebAssembly.Memory({initial: 1});
            const instance = new WebAssembly.Instance(module, {
                env: {
                    memory,
                    requestRedraw: () => {
                        runtimeThread.target.runtime.requestRedraw();
                    }
                }
            });
            const view = new DataView(memory.buffer);

            for (const variableInfo of variables) {
                view.setFloat64(variableInfo.offset, readVariable(runtimeThread, variableInfo), true);
            }

            return {
                next: () => {
                    const status = instance.exports.run();
                    for (const variableInfo of variables) {
                        writeVariable(
                            runtimeThread,
                            variableInfo,
                            view.getFloat64(variableInfo.offset, true)
                        );
                    }
                    return {
                        done: status === 0
                    };
                }
            };
        };
    };

    const createFactory = data => {
        if (data.format === 'js') {
            return jsexecute.scopedEval(data.factorySource);
        }
        if (data.format === 'wasm') {
            return createWasmFactory(data);
        }
        throw new Error(`Invalid worker result format: ${data.format}`);
    };

    const compileTasks = tasks => {
        if (typeof compilerWorkerProxy.compileTasks === 'function') {
            return compilerWorkerProxy.compileTasks(tasks);
        }
        return Promise.all(tasks.map(task => compilerWorkerProxy.compile(task)));
    };

    const procedureVariants = Object.keys(ir.procedures);
    const tasks = [
        {
            script: ir.entry,
            ir,
            targetData,
            useWasm
        },
        ...procedureVariants.map(procedureVariant => ({
            script: ir.procedures[procedureVariant],
            ir,
            targetData,
            useWasm
        }))
    ];

    return compileTasks(tasks)
        .then(results => Promise.all(results.map(createFactory)))
        .then(([entry, ...compiledProcedures]) => {
            const procedures = {};
            for (let i = 0; i < procedureVariants.length; i++) {
                procedures[procedureVariants[i]] = compiledProcedures[i];
            }

            return {
                startingFunction: entry,
                procedures,
                executableHat: ir.entry.executableHat
            };
        });
};

module.exports = compile;
