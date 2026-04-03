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

const makeSupportedIR = () => {
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
    return new IntermediateRepresentation(script, {});
};

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

test('compileTask emits executable wasm for supported numeric kernels', async t => {
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

    const module = await WebAssembly.compile(result.wasmBytes);
    const memory = new WebAssembly.Memory({initial: 1});
    const instance = new WebAssembly.Instance(module, {
        env: {
            memory,
            requestRedraw: () => {}
        }
    });
    const view = new DataView(memory.buffer);
    view.setFloat64(1024, 7, true);

    t.equal(instance.exports.run(), 0);
    t.equal(view.getFloat64(1024, true), 10);
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

test('compile precompiles wasm modules once and syncs variables back to the thread', async t => {
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
    t.equal(wasmCompileCount, 1);

    const firstGenerator = compiled.startingFunction(makeThread(firstVariable))();
    t.same(firstGenerator.next(), {done: true});
    t.equal(firstVariable.value, 10);
    t.equal(wasmCompileCount, 1);

    const secondGenerator = compiled.startingFunction(makeThread(secondVariable))();
    t.same(secondGenerator.next(), {done: true});
    t.equal(secondVariable.value, 5);
    t.equal(wasmCompileCount, 1);
});
