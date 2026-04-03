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
 * @property {object} compilationStats
 */

/**
 * @param {Array<object>} results
 * @param {Array<string>} procedureVariants
 * @returns {object}
 */
const summarizeCompilation = (results, procedureVariants) => {
    const procedureFormats = {};
    let wasmScriptCount = 0;
    let jsScriptCount = 0;

    const incrementFormat = format => {
        if (format === 'wasm') {
            wasmScriptCount++;
        } else {
            jsScriptCount++;
        }
    };

    const entryFormat = results[0] ? results[0].format : 'js';
    incrementFormat(entryFormat);

    for (let i = 0; i < procedureVariants.length; i++) {
        const format = results[i + 1] ? results[i + 1].format : 'js';
        procedureFormats[procedureVariants[i]] = format;
        incrementFormat(format);
    }

    return {
        entryFormat,
        procedureFormats,
        scriptCount: results.length,
        wasmScriptCount,
        jsScriptCount
    };
};

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
        const variableSlots = variables.map(variableInfo => ({
            id: variableInfo.id,
            slot: variableInfo.offset >>> 3
        }));
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
            const numericMemory = variableSlots.length > 0 ? new Float64Array(memory.buffer) : null;

            for (const variableInfo of variableSlots) {
                numericMemory[variableInfo.slot] = readVariable(runtimeThread, variableInfo);
            }

            return {
                next: () => {
                    const status = instance.exports.run();
                    for (const variableInfo of variableSlots) {
                        writeVariable(
                            runtimeThread,
                            variableInfo,
                            numericMemory[variableInfo.slot]
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
        .then(results => Promise.all([
            Promise.resolve(summarizeCompilation(results, procedureVariants)),
            Promise.all(results.map(createFactory))
        ]))
        .then(([compilationStats, [entry, ...compiledProcedures]]) => {
            const procedures = {};
            for (let i = 0; i < procedureVariants.length; i++) {
                procedures[procedureVariants[i]] = compiledProcedures[i];
            }

            return {
                startingFunction: entry,
                procedures,
                executableHat: ir.entry.executableHat,
                compilationStats
            };
        });
};

module.exports = compile;
