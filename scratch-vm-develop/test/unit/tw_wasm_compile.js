const {test} = require('tap');

const compile = require('../../src/compiler/compile');
const compilerWorkerProxy = require('../../src/compiler/compiler-worker-proxy');
const {compileTask} = require('../../src/compiler/compile-task');
const {IRGenerator} = require('../../src/compiler/irgen');
const {IROptimizer} = require('../../src/compiler/iroptimizer');
const {
    IntermediateInput,
    IntermediateStackBlock,
    IntermediateStack,
    IntermediateScript,
    IntermediateRepresentation
} = require('../../src/compiler/intermediate');
const {InputOpcode, InputType, StackOpcode} = require('../../src/compiler/enums');

const makeSupportedScript = () => {
    const script = new IntermediateScript();
    script.yields = false;
    script.stack = new IntermediateStack([
        new IntermediateStackBlock(StackOpcode.VAR_SET, {
            variable: {id: 'var1'},
            value: new IntermediateInput(InputOpcode.OP_ADD, InputType.NUMBER, {
                left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                    variable: {id: 'var1'}
                }),
                right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                    value: 3
                })
            })
        })
    ]);
    return script;
};

const makeSupportedIR = () => new IntermediateRepresentation(makeSupportedScript(), {});

const makeSupportedIRWithProcedure = () => new IntermediateRepresentation(
    makeSupportedScript(),
    {
        procedureVariant: makeSupportedScript()
    }
);

const makeSupportedControlFlowScript = () => {
    const variable1 = {id: 'var1'};
    const variable2 = {id: 'var2'};
    const script = new IntermediateScript();
    script.yields = false;
    script.stack = new IntermediateStack([
        new IntermediateStackBlock(StackOpcode.VAR_SET, {
            variable: variable1,
            value: new IntermediateInput(InputOpcode.OP_ADD, InputType.NUMBER, {
                left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                    variable: variable1
                }),
                right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                    value: 3
                })
            })
        }),
        new IntermediateStackBlock(StackOpcode.CONTROL_IF_ELSE, {
            condition: new IntermediateInput(InputOpcode.OP_GREATER, InputType.BOOLEAN, {
                left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                    variable: variable1
                }),
                right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                    value: 5
                })
            }),
            whenTrue: new IntermediateStack([
                new IntermediateStackBlock(StackOpcode.VAR_SET, {
                    variable: variable1,
                    value: new IntermediateInput(InputOpcode.OP_MULTIPLY, InputType.NUMBER, {
                        left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                            variable: variable1
                        }),
                        right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                            value: 2
                        })
                    })
                })
            ]),
            whenFalse: new IntermediateStack([
                new IntermediateStackBlock(StackOpcode.VAR_SET, {
                    variable: variable1,
                    value: new IntermediateInput(InputOpcode.OP_SUBTRACT, InputType.NUMBER, {
                        left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                            variable: variable1
                        }),
                        right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                            value: 1
                        })
                    })
                })
            ])
        }),
        new IntermediateStackBlock(StackOpcode.CONTROL_WHILE, {
            condition: new IntermediateInput(InputOpcode.OP_LESS, InputType.BOOLEAN, {
                left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                    variable: variable1
                }),
                right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                    value: 20
                })
            }),
            do: new IntermediateStack([
                new IntermediateStackBlock(StackOpcode.VAR_SET, {
                    variable: variable1,
                    value: new IntermediateInput(InputOpcode.OP_ADD, InputType.NUMBER, {
                        left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                            variable: variable1
                        }),
                        right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                            value: 4
                        })
                    })
                })
            ])
        }),
        new IntermediateStackBlock(StackOpcode.VAR_SET, {
            variable: variable2,
            value: new IntermediateInput(InputOpcode.OP_EQUALS, InputType.BOOLEAN, {
                left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                    variable: variable1
                }),
                right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                    value: 22
                })
            })
        })
    ]);
    return script;
};

const makeSupportedControlFlowIR = () => new IntermediateRepresentation(makeSupportedControlFlowScript(), {});

const makeUnsupportedIR = () => {
    const script = new IntermediateScript();
    script.yields = false;
    script.stack = new IntermediateStack([
        new IntermediateStackBlock(StackOpcode.LOOKS_SHOW, {})
    ]);
    return new IntermediateRepresentation(script, {});
};

const makeThread = variable => ({
    target: {
        runtime: {
            compilerOptions: {
                useWasm: true
            },
            debug: false,
            requestRedraw: () => {},
            ioDevices: {
                cloud: {
                    requestUpdateVariable: () => {}
                }
            }
        },
        isStage: false,
        effects: {},
        getName: () => 'Sprite1',
        lookupVariableById: id => (id === variable.id ? variable : null)
    }
});

test('compile can be required without worker-loader', t => {
    t.type(compile, 'function');
    t.end();
});

test('compileTask emits executable wasm for supported numeric kernels', t => {
    const ir = makeSupportedIR();
    const result = compileTask({
        script: ir.entry,
        ir,
        targetData: {
            name: 'Sprite1',
            debug: false,
            isStage: false,
            effects: {}
        },
        useWasm: true
    });

    t.equal(result.format, 'wasm');
    t.same(result.variables, [{id: 'var1', offset: 1024}]);
    t.type(result.wasmModule, WebAssembly.Module);

    const memory = new WebAssembly.Memory({initial: 1});
    const instance = new WebAssembly.Instance(result.wasmModule, {
        env: {
            memory,
            requestRedraw: () => {}
        }
    });
    const view = new DataView(memory.buffer);
    view.setFloat64(1024, 7, true);

    t.equal(instance.exports.run(), 0);
    t.equal(view.getFloat64(1024, true), 10);
    t.end();
});

test('compileTask emits executable wasm for supported control flow kernels', t => {
    const ir = makeSupportedControlFlowIR();
    const result = compileTask({
        script: ir.entry,
        ir,
        targetData: {
            name: 'Sprite1',
            debug: false,
            isStage: false,
            effects: {}
        },
        useWasm: true
    });

    t.equal(result.format, 'wasm');
    t.same(result.variables, [
        {id: 'var1', offset: 1024},
        {id: 'var2', offset: 1032}
    ]);

    const memory = new WebAssembly.Memory({initial: 1});
    const instance = new WebAssembly.Instance(result.wasmModule, {
        env: {
            memory,
            requestRedraw: () => {}
        }
    });
    const view = new DataView(memory.buffer);
    view.setFloat64(1024, 4, true);
    view.setFloat64(1032, 0, true);

    t.equal(instance.exports.run(), 0);
    t.equal(view.getFloat64(1024, true), 22);
    t.equal(view.getFloat64(1032, true), 1);
    t.end();
});

test('compileTask falls back to JS for unsupported scripts when useWasm is enabled', t => {
    const ir = makeUnsupportedIR();
    const result = compileTask({
        script: ir.entry,
        ir,
        targetData: {
            name: 'Sprite1',
            debug: false,
            isStage: false,
            effects: {}
        },
        useWasm: true
    });

    t.equal(result.format, 'js');
    t.type(result.factorySource, 'string');
    t.end();
});

test('compileTask falls back to JS for procedure scripts even when the body is wasm-compatible', t => {
    const script = makeSupportedScript();
    script.isProcedure = true;
    const ir = new IntermediateRepresentation(script, {});
    const result = compileTask({
        script,
        ir,
        targetData: {
            name: 'Sprite1',
            debug: false,
            isStage: false,
            effects: {}
        },
        useWasm: true
    });

    t.equal(result.format, 'js');
    t.type(result.factorySource, 'string');
    t.end();
});

test('compiler-worker posts the normalized wasm contract', t => {
    const ir = makeSupportedIR();
    const workerPath = require.resolve('../../src/compiler/compiler-worker');
    const originalSelf = global.self;
    const messages = [];

    global.self = {
        postMessage: (...args) => {
            messages.push(args);
        }
    };

    delete require.cache[workerPath];
    // eslint-disable-next-line global-require
    require(workerPath);

    t.teardown(() => {
        delete require.cache[workerPath];
        global.self = originalSelf;
    });

    global.self.onmessage({
        data: {
            script: ir.entry,
            ir,
            targetData: {
                name: 'Sprite1',
                debug: false,
                isStage: false,
                effects: {}
            },
            useWasm: true
        }
    });

    t.equal(messages.length, 1);
    t.equal(messages[0][0].success, true);
    t.equal(messages[0][0].result.format, 'wasm');
    t.type(messages[0][0].result.wasmModule, WebAssembly.Module);
    t.same(messages[0][0].result.variables, [{id: 'var1', offset: 1024}]);
    t.equal(messages[0][1].length, 1);
    t.end();
});

test('compiler-worker strips wasmModule when the environment cannot clone it', t => {
    const ir = makeSupportedIR();
    const workerPath = require.resolve('../../src/compiler/compiler-worker');
    const originalSelf = global.self;
    const originalMessageChannel = global.MessageChannel;
    const messages = [];

    class BrokenMessageChannel {
        constructor () {
            this.port1 = {
                postMessage: () => {
                    throw new Error('structured clone does not support WebAssembly.Module');
                },
                close: () => {}
            };
            this.port2 = {
                close: () => {}
            };
        }
    }

    global.MessageChannel = BrokenMessageChannel;
    global.self = {
        postMessage: (...args) => {
            messages.push(args);
        }
    };

    delete require.cache[workerPath];
    // eslint-disable-next-line global-require
    require(workerPath);

    t.teardown(() => {
        delete require.cache[workerPath];
        global.MessageChannel = originalMessageChannel;
        global.self = originalSelf;
    });

    global.self.onmessage({
        data: {
            script: ir.entry,
            ir,
            targetData: {
                name: 'Sprite1',
                debug: false,
                isStage: false,
                effects: {}
            },
            useWasm: true
        }
    });

    t.equal(messages.length, 1);
    t.equal(messages[0][0].success, true);
    t.equal(messages[0][0].result.format, 'wasm');
    t.notOk(messages[0][0].result.wasmModule);
    t.type(messages[0][0].result.wasmBytes, Uint8Array);
    t.equal(messages[0][1].length, 1);
    t.end();
});

test('compile reuses prebuilt wasm modules and syncs variables back to the thread', async t => {
    const ir = makeSupportedIR();
    const originalGenerate = IRGenerator.prototype.generate;
    const originalOptimize = IROptimizer.prototype.optimize;
    const originalProxyCompile = compilerWorkerProxy.compile;
    const originalWasmCompile = WebAssembly.compile;

    let wasmCompileCount = 0;

    IRGenerator.prototype.generate = function () {
        return ir;
    };
    IROptimizer.prototype.optimize = function () {};
    compilerWorkerProxy.compile = data => Promise.resolve(compileTask(data));
    WebAssembly.compile = bytes => {
        wasmCompileCount += 1;
        return originalWasmCompile.call(WebAssembly, bytes);
    };

    t.teardown(() => {
        IRGenerator.prototype.generate = originalGenerate;
        IROptimizer.prototype.optimize = originalOptimize;
        compilerWorkerProxy.compile = originalProxyCompile;
        WebAssembly.compile = originalWasmCompile;
    });

    const firstVariable = {
        id: 'var1',
        value: 7,
        isCloud: false
    };
    const secondVariable = {
        id: 'var1',
        value: 2,
        isCloud: false
    };

    const compiled = await compile(makeThread(firstVariable));
    t.equal(wasmCompileCount, 0);
    t.same(compiled.compilationStats, {
        entryFormat: 'wasm',
        procedureFormats: {},
        scriptCount: 1,
        wasmScriptCount: 1,
        jsScriptCount: 0
    });

    const firstGenerator = compiled.startingFunction(makeThread(firstVariable))();
    t.same(firstGenerator.next(), {done: true});
    t.equal(firstVariable.value, 10);
    t.equal(wasmCompileCount, 0);

    const secondGenerator = compiled.startingFunction(makeThread(secondVariable))();
    t.same(secondGenerator.next(), {done: true});
    t.equal(secondVariable.value, 5);
    t.equal(wasmCompileCount, 0);
});

test('compile falls back to WebAssembly.compile once when the worker only returns bytes', async t => {
    const ir = makeSupportedIR();
    const originalGenerate = IRGenerator.prototype.generate;
    const originalOptimize = IROptimizer.prototype.optimize;
    const originalProxyCompile = compilerWorkerProxy.compile;
    const originalProxyCompileTasks = compilerWorkerProxy.compileTasks;
    const originalWasmCompile = WebAssembly.compile;

    let wasmCompileCount = 0;

    IRGenerator.prototype.generate = function () {
        return ir;
    };
    IROptimizer.prototype.optimize = function () {};
    compilerWorkerProxy.compileTasks = tasks => {
        const results = tasks.map(task => {
            const result = compileTask(task);
            delete result.wasmModule;
            return result;
        });
        return Promise.resolve(results);
    };
    WebAssembly.compile = bytes => {
        wasmCompileCount += 1;
        return originalWasmCompile.call(WebAssembly, bytes);
    };

    t.teardown(() => {
        IRGenerator.prototype.generate = originalGenerate;
        IROptimizer.prototype.optimize = originalOptimize;
        compilerWorkerProxy.compile = originalProxyCompile;
        compilerWorkerProxy.compileTasks = originalProxyCompileTasks;
        WebAssembly.compile = originalWasmCompile;
    });

    const variable = {
        id: 'var1',
        value: 11,
        isCloud: false
    };

    const compiled = await compile(makeThread(variable));
    t.equal(wasmCompileCount, 1);

    const generator = compiled.startingFunction(makeThread(variable))();
    t.same(generator.next(), {done: true});
    t.equal(variable.value, 14);
    t.equal(wasmCompileCount, 1);
});

test('compile batches entry and procedures into one worker request', async t => {
    const ir = makeSupportedIRWithProcedure();
    const originalGenerate = IRGenerator.prototype.generate;
    const originalOptimize = IROptimizer.prototype.optimize;
    const originalProxyCompile = compilerWorkerProxy.compile;
    const originalProxyCompileTasks = compilerWorkerProxy.compileTasks;

    let batch = null;

    IRGenerator.prototype.generate = function () {
        return ir;
    };
    IROptimizer.prototype.optimize = function () {};
    compilerWorkerProxy.compile = () => {
        throw new Error('compile() should not be used when compileTasks() is available');
    };
    compilerWorkerProxy.compileTasks = tasks => {
        batch = tasks;
        return Promise.resolve(tasks.map(task => compileTask(task)));
    };

    t.teardown(() => {
        IRGenerator.prototype.generate = originalGenerate;
        IROptimizer.prototype.optimize = originalOptimize;
        compilerWorkerProxy.compile = originalProxyCompile;
        compilerWorkerProxy.compileTasks = originalProxyCompileTasks;
    });

    const variable = {
        id: 'var1',
        value: 4,
        isCloud: false
    };

    const compiled = await compile(makeThread(variable));
    t.equal(batch.length, 2);
    t.type(compiled.startingFunction, 'function');
    t.type(compiled.procedures.procedureVariant, 'function');
    t.same(compiled.compilationStats, {
        entryFormat: 'wasm',
        procedureFormats: {
            procedureVariant: 'wasm'
        },
        scriptCount: 2,
        wasmScriptCount: 2,
        jsScriptCount: 0
    });
});
