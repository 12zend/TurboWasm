#!/usr/bin/env node
/* eslint-env node */

const {performance} = require('perf_hooks');

const {compileTask} = require('../compiler/compile-task');
const jsexecute = require('../compiler/jsexecute');
const {
    IntermediateInput,
    IntermediateRepresentation,
    IntermediateScript,
    IntermediateStack,
    IntermediateStackBlock
} = require('../compiler/intermediate');
const {InputOpcode, InputType, StackOpcode} = require('../compiler/enums');

const setExecutionThread = jsexecute.scopedEval('(thread) => { globalState.thread = thread; }');

const iterations = Number(process.argv[2] || 250000);
const rounds = Number(process.argv[3] || 20);

const makeKernelIR = () => {
    const counter = {id: 'counter', name: 'counter'};
    const script = new IntermediateScript();
    script.yields = false;
    script.isWarp = true;
    script.stack = new IntermediateStack([
        new IntermediateStackBlock(StackOpcode.VAR_SET, {
            variable: counter,
            value: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                value: 0
            })
        }),
        new IntermediateStackBlock(StackOpcode.CONTROL_REPEAT, {
            times: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                value: iterations
            }),
            do: new IntermediateStack([
                new IntermediateStackBlock(StackOpcode.VAR_SET, {
                    variable: counter,
                    value: new IntermediateInput(InputOpcode.OP_ADD, InputType.NUMBER, {
                        left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                            variable: counter
                        }),
                        right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                            value: 3
                        })
                    })
                }),
                new IntermediateStackBlock(StackOpcode.CONTROL_IF_ELSE, {
                    condition: new IntermediateInput(InputOpcode.OP_GREATER, InputType.BOOLEAN, {
                        left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                            variable: counter
                        }),
                        right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                            value: 1000
                        })
                    }),
                    whenTrue: new IntermediateStack([
                        new IntermediateStackBlock(StackOpcode.VAR_SET, {
                            variable: counter,
                            value: new IntermediateInput(InputOpcode.OP_SUBTRACT, InputType.NUMBER, {
                                left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                                    variable: counter
                                }),
                                right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                                    value: 1000
                                })
                            })
                        })
                    ]),
                    whenFalse: new IntermediateStack([
                        new IntermediateStackBlock(StackOpcode.VAR_SET, {
                            variable: counter,
                            value: new IntermediateInput(InputOpcode.OP_ADD, InputType.NUMBER, {
                                left: new IntermediateInput(InputOpcode.VAR_GET, InputType.NUMBER, {
                                    variable: counter
                                }),
                                right: new IntermediateInput(InputOpcode.CONSTANT, InputType.NUMBER, {
                                    value: 1
                                })
                            })
                        })
                    ])
                })
            ])
        })
    ]);
    return new IntermediateRepresentation(script, {});
};

const makeThread = variable => {
    const stage = {
        variables: {
            [variable.id]: variable
        }
    };
    const runtime = {
        getTargetForStage: () => stage,
        ioDevices: {
            cloud: {
                requestUpdateVariable: () => {}
            }
        },
        requestRedraw: () => {},
        ext_pen: null,
        visualReport: () => {},
        sequencer: {
            timer: {
                timeElapsed: () => 0
            },
            retireThread: () => {}
        }
    };
    const target = {
        runtime,
        sprite: {
            clones: []
        },
        blocks: {
            getBlock: () => null
        },
        effects: {},
        getName: () => 'BenchmarkSprite',
        lookupVariableById: id => (id === variable.id ? variable : null),
        lookupOrCreateVariable: () => variable
    };
    return {
        target,
        procedures: {},
        status: 0,
        stackFrames: [],
        atStackTop: () => true
    };
};

const measure = (label, runner) => {
    for (let i = 0; i < 3; i++) {
        runner();
    }

    const samples = [];
    let lastResult = null;
    for (let i = 0; i < rounds; i++) {
        const start = performance.now();
        lastResult = runner();
        samples.push(performance.now() - start);
    }

    const total = samples.reduce((sum, value) => sum + value, 0);
    const average = total / samples.length;
    console.log(`${label}: avg ${average.toFixed(3)} ms over ${rounds} rounds, result=${lastResult}`);
    return average;
};

const ir = makeKernelIR();
const targetData = {
    name: 'BenchmarkSprite',
    debug: false,
    isStage: false,
    effects: {}
};

const jsResult = compileTask({
    script: ir.entry,
    ir,
    targetData,
    useWasm: false
});
const jsFactory = jsexecute.scopedEval(jsResult.factorySource);

const wasmResult = compileTask({
    script: ir.entry,
    ir,
    targetData,
    useWasm: true
});

if (wasmResult.format !== 'wasm') {
    throw new Error('Benchmark kernel did not compile to wasm');
}

const runJsKernel = () => {
    const variable = {
        id: 'counter',
        name: 'counter',
        value: 0,
        isCloud: false
    };
    const thread = makeThread(variable);
    setExecutionThread(thread);
    jsFactory(thread)();
    return variable.value;
};

const runWasmKernel = () => {
    const memory = new WebAssembly.Memory({initial: 1});
    const instance = new WebAssembly.Instance(wasmResult.wasmModule, {
        env: {
            memory,
            requestRedraw: () => {}
        }
    });
    const counterOffset = wasmResult.variables[0].offset;
    const view = new DataView(memory.buffer);
    view.setFloat64(counterOffset, 0, true);
    instance.exports.run();
    return view.getFloat64(counterOffset, true);
};

const jsSanity = runJsKernel();
const wasmSanity = runWasmKernel();
if (jsSanity !== wasmSanity) {
    throw new Error(`Benchmark mismatch: js=${jsSanity}, wasm=${wasmSanity}`);
}

console.log(`TurboWasm numeric kernel benchmark`);
console.log(`iterations=${iterations}, rounds=${rounds}`);

const jsAverage = measure('js', runJsKernel);
const wasmAverage = measure('wasm', runWasmKernel);
console.log(`speedup=${(jsAverage / wasmAverage).toFixed(2)}x`);
