// @ts-check

const {StackOpcode, InputOpcode, InputType} = require('./enums.js');

/**
 * @fileoverview Convert intermediate representations to WebAssembly binaries.
 */

const Op = {
    block: 0x02,
    loop: 0x03,
    if: 0x04,
    else: 0x05,
    end: 0x0b,
    br: 0x0c,
    br_if: 0x0d,
    return: 0x0f,
    local_get: 0x20,
    local_set: 0x21,
    local_tee: 0x22,
    i32_load: 0x28,
    f64_load: 0x2b,
    i32_store: 0x36,
    f64_store: 0x39,
    i32_const: 0x41,
    f64_const: 0x44,
    i32_eqz: 0x45,
    f64_eq: 0x61,
    f64_ne: 0x62,
    f64_lt: 0x63,
    f64_gt: 0x64,
    f64_add: 0xa0,
    f64_sub: 0xa1,
    f64_mul: 0xa2,
    f64_div: 0xa3,
    i32_sub: 0x6b,
    i32_and: 0x71,
    i32_or: 0x72,
    f64_convert_i32_s: 0xb7
};

const Section = {
    type: 1,
    import: 2,
    function: 3,
    export: 7,
    code: 10
};

const ValType = {
    i32: 0x7f,
    f64: 0x7c
};

/**
 * @param {number} n
 * @returns {number[]}
 */
const encodeU32 = n => {
    const buffer = [];
    do {
        let byte = n & 0x7f;
        n >>>= 7;
        if (n !== 0) {
            byte |= 0x80;
        }
        buffer.push(byte);
    } while (n !== 0);
    return buffer;
};

/**
 * @param {number} n
 * @returns {Uint8Array}
 */
const encodeF64 = n => {
    const buffer = new ArrayBuffer(8);
    new DataView(buffer).setFloat64(0, n, true);
    return new Uint8Array(buffer);
};

/**
 * @param {string} value
 * @returns {number[]}
 */
const encodeName = value => {
    const bytes = [];
    for (let i = 0; i < value.length; i++) {
        bytes.push(value.charCodeAt(i));
    }
    return [...encodeU32(bytes.length), ...bytes];
};

class WasmGenerator {
    /**
     * @param {import("./intermediate").IntermediateScript} script
     * @param {import("./intermediate").IntermediateRepresentation} ir
     * @param {import("../sprites/rendered-target")} target
     */
    constructor (script, ir, target) {
        this.script = script;
        this.ir = ir;
        this.target = target;

        /** @type {number[]} */
        this.code = [];

        /** @type {Map<string, number>} */
        this.variablesMap = new Map();

        /** @type {Map<string, number>} */
        this.variableLocalMap = new Map();

        /** @type {number[]} */
        this.locals = [];

        this.stateOffset = 0;
        this.variableBaseOffset = 1024;
    }

    /**
     * @param {import("./intermediate").IntermediateInput} input
     * @returns {boolean}
     */
    supportsNumericInput (input) {
        switch (input.opcode) {
        case InputOpcode.CONSTANT:
            return typeof input.inputs.value === 'number' || typeof input.inputs.value === 'boolean';
        case InputOpcode.VAR_GET:
            return true;
        case InputOpcode.CAST_NUMBER:
        case InputOpcode.CAST_NUMBER_OR_NAN:
        case InputOpcode.CAST_NUMBER_INDEX:
            return this.supportsNumericInput(input.inputs.target) || this.supportsBooleanInput(input.inputs.target);
        case InputOpcode.CAST_BOOLEAN:
            return this.supportsBooleanInput(input.inputs.target);
        case InputOpcode.OP_ADD:
        case InputOpcode.OP_SUBTRACT:
        case InputOpcode.OP_MULTIPLY:
        case InputOpcode.OP_DIVIDE:
            return this.supportsNumericInput(input.inputs.left) && this.supportsNumericInput(input.inputs.right);
        case InputOpcode.OP_LESS:
        case InputOpcode.OP_GREATER:
        case InputOpcode.OP_EQUALS:
        case InputOpcode.OP_AND:
        case InputOpcode.OP_OR:
        case InputOpcode.OP_NOT:
            return this.supportsBooleanInput(input);
        default:
            return false;
        }
    }

    /**
     * @param {import("./intermediate").IntermediateInput} input
     * @returns {boolean}
     */
    supportsBooleanInput (input) {
        switch (input.opcode) {
        case InputOpcode.CONSTANT:
            return typeof input.inputs.value === 'boolean' || typeof input.inputs.value === 'number';
        case InputOpcode.CAST_BOOLEAN:
            return this.supportsNumericInput(input.inputs.target) || this.supportsBooleanInput(input.inputs.target);
        case InputOpcode.OP_AND:
        case InputOpcode.OP_OR:
            return this.supportsBooleanInput(input.inputs.left) && this.supportsBooleanInput(input.inputs.right);
        case InputOpcode.OP_NOT:
            return this.supportsBooleanInput(input.inputs.operand);
        case InputOpcode.OP_LESS:
        case InputOpcode.OP_GREATER:
        case InputOpcode.OP_EQUALS:
            return this.supportsNumericInput(input.inputs.left) && this.supportsNumericInput(input.inputs.right);
        default:
            return this.supportsNumericInput(input) &&
                input.isAlwaysType(InputType.NUMBER | InputType.NUMBER_OR_NAN | InputType.BOOLEAN);
        }
    }

    /**
     * @param {import("./intermediate").IntermediateStackBlock} block
     * @returns {boolean}
     */
    supportsStackedBlock (block) {
        if (block.yields) {
            return false;
        }

        const node = block.inputs;
        switch (block.opcode) {
        case StackOpcode.NOP:
            return true;
        case StackOpcode.VAR_SET:
            return this.supportsNumericInput(node.value);
        case StackOpcode.CONTROL_REPEAT:
            return this.supportsNumericInput(node.times) && this.supportsStack(node.do);
        case StackOpcode.CONTROL_IF_ELSE:
            return this.supportsBooleanInput(node.condition) &&
                this.supportsStack(node.whenTrue) &&
                this.supportsStack(node.whenFalse);
        case StackOpcode.CONTROL_WHILE:
            return this.supportsBooleanInput(node.condition) && this.supportsStack(node.do);
        default:
            return false;
        }
    }

    /**
     * @param {import("./intermediate").IntermediateStack} stack
     * @returns {boolean}
     */
    supportsStack (stack) {
        for (const block of stack.blocks) {
            if (!this.supportsStackedBlock(block)) {
                return false;
            }
        }
        return true;
    }

    supportsScript () {
        return Boolean(this.script.stack) &&
            !this.script.isProcedure &&
            !this.script.executableHat &&
            this.supportsStack(this.script.stack);
    }

    /**
     * @param {number | number[]} bytes
     */
    emit (bytes) {
        if (Array.isArray(bytes)) {
            this.code.push(...bytes);
            return;
        }
        this.code.push(bytes);
    }

    /**
     * @param {number} type
     * @returns {number}
     */
    allocateLocal (type) {
        const index = this.locals.length;
        this.locals.push(type);
        return index;
    }

    /**
     * @param {number} value
     */
    emitF64Const (value) {
        this.emit(Op.f64_const);
        this.emit(Array.from(encodeF64(value)));
    }

    /**
     * @param {number} value
     */
    emitI32Const (value) {
        this.emit(Op.i32_const);
        this.emit(encodeU32(value));
    }

    /**
     * @param {any} variable
     * @returns {number}
     */
    getVariableOffset (variable) {
        if (this.variablesMap.has(variable.id)) {
            return this.variablesMap.get(variable.id);
        }
        const offset = this.variableBaseOffset + (this.variablesMap.size * 8);
        this.variablesMap.set(variable.id, offset);
        return offset;
    }

    /**
     * @param {any} variable
     * @returns {number}
     */
    getVariableLocal (variable) {
        if (this.variableLocalMap.has(variable.id)) {
            return this.variableLocalMap.get(variable.id);
        }
        const local = this.allocateLocal(ValType.f64);
        this.variableLocalMap.set(variable.id, local);
        return local;
    }

    /**
     * @param {import("./intermediate").IntermediateInput} input
     */
    registerNumericInput (input) {
        const node = input.inputs;
        switch (input.opcode) {
        case InputOpcode.VAR_GET:
            this.getVariableOffset(node.variable);
            this.getVariableLocal(node.variable);
            return;
        case InputOpcode.CAST_NUMBER:
        case InputOpcode.CAST_NUMBER_OR_NAN:
        case InputOpcode.CAST_NUMBER_INDEX:
        case InputOpcode.CAST_BOOLEAN:
            this.registerInput(node.target);
            return;
        case InputOpcode.OP_ADD:
        case InputOpcode.OP_SUBTRACT:
        case InputOpcode.OP_MULTIPLY:
        case InputOpcode.OP_DIVIDE:
        case InputOpcode.OP_AND:
        case InputOpcode.OP_OR:
        case InputOpcode.OP_EQUALS:
        case InputOpcode.OP_GREATER:
        case InputOpcode.OP_LESS:
            this.registerInput(node.left);
            this.registerInput(node.right);
            return;
        case InputOpcode.OP_NOT:
            this.registerInput(node.operand);
            return;
        default:
            return;
        }
    }

    /**
     * @param {import("./intermediate").IntermediateInput} input
     */
    registerInput (input) {
        if (this.supportsBooleanInput(input) || this.supportsNumericInput(input)) {
            this.registerNumericInput(input);
        }
    }

    /**
     * @param {import("./intermediate").IntermediateStackBlock} block
     */
    registerStackedBlock (block) {
        const node = block.inputs;
        switch (block.opcode) {
        case StackOpcode.VAR_SET:
            this.getVariableOffset(node.variable);
            this.getVariableLocal(node.variable);
            this.registerInput(node.value);
            return;
        case StackOpcode.CONTROL_REPEAT:
            this.registerInput(node.times);
            this.registerStack(node.do);
            return;
        case StackOpcode.CONTROL_IF_ELSE:
            this.registerInput(node.condition);
            this.registerStack(node.whenTrue);
            this.registerStack(node.whenFalse);
            return;
        case StackOpcode.CONTROL_WHILE:
            this.registerInput(node.condition);
            this.registerStack(node.do);
            return;
        default:
            return;
        }
    }

    /**
     * @param {import("./intermediate").IntermediateStack} stack
     */
    registerStack (stack) {
        for (const block of stack.blocks) {
            this.registerStackedBlock(block);
        }
    }

    syncVariablesFromMemory () {
        for (const [id, offset] of this.variablesMap.entries()) {
            this.emitI32Const(offset);
            this.emit(Op.f64_load);
            this.emit([0x03, 0x00]);
            this.emit(Op.local_set);
            this.emit(encodeU32(this.variableLocalMap.get(id)));
        }
    }

    syncVariablesToMemory () {
        for (const [id, offset] of this.variablesMap.entries()) {
            this.emitI32Const(offset);
            this.emit(Op.local_get);
            this.emit(encodeU32(this.variableLocalMap.get(id)));
            this.emit(Op.f64_store);
            this.emit([0x03, 0x00]);
        }
    }

    /**
     * @param {import("./intermediate").IntermediateInput} input
     */
    descendNumericInput (input) {
        const node = input.inputs;
        switch (input.opcode) {
        case InputOpcode.CONSTANT:
            this.emitF64Const(typeof node.value === 'number' ? node.value : (node.value ? 1 : 0));
            break;
        case InputOpcode.VAR_GET: {
            this.emit(Op.local_get);
            this.emit(encodeU32(this.getVariableLocal(node.variable)));
            break;
        }
        case InputOpcode.CAST_NUMBER:
        case InputOpcode.CAST_NUMBER_OR_NAN:
        case InputOpcode.CAST_NUMBER_INDEX:
            if (this.supportsNumericInput(node.target)) {
                this.descendNumericInput(node.target);
            } else {
                this.descendBooleanAsNumber(node.target);
            }
            break;
        case InputOpcode.CAST_BOOLEAN:
            this.descendBooleanAsNumber(node.target);
            break;
        case InputOpcode.OP_ADD:
            this.descendNumericInput(node.left);
            this.descendNumericInput(node.right);
            this.emit(Op.f64_add);
            break;
        case InputOpcode.OP_SUBTRACT:
            this.descendNumericInput(node.left);
            this.descendNumericInput(node.right);
            this.emit(Op.f64_sub);
            break;
        case InputOpcode.OP_MULTIPLY:
            this.descendNumericInput(node.left);
            this.descendNumericInput(node.right);
            this.emit(Op.f64_mul);
            break;
        case InputOpcode.OP_DIVIDE:
            this.descendNumericInput(node.left);
            this.descendNumericInput(node.right);
            this.emit(Op.f64_div);
            break;
        case InputOpcode.OP_LESS:
        case InputOpcode.OP_GREATER:
        case InputOpcode.OP_EQUALS:
        case InputOpcode.OP_AND:
        case InputOpcode.OP_OR:
        case InputOpcode.OP_NOT:
            this.descendBooleanAsNumber(input);
            break;
        default:
            throw new Error(`Unsupported numeric input in WASM generator: ${input.opcode}`);
        }
    }

    /**
     * @param {import("./intermediate").IntermediateInput} input
     */
    descendBooleanAsNumber (input) {
        this.descendCondition(input);
        this.emit(Op.f64_convert_i32_s);
    }

    /**
     * Convert a numeric stack value to a Scratch boolean.
     * Scratch treats NaN as false, so we need both `value != 0` and `value === value`.
     */
    emitNumberTruthinessFromStack () {
        const local = this.allocateLocal(ValType.f64);
        this.emit(Op.local_tee);
        this.emit(encodeU32(local));
        this.emitF64Const(0);
        this.emit(Op.f64_ne);
        this.emit(Op.local_get);
        this.emit(encodeU32(local));
        this.emit(Op.local_get);
        this.emit(encodeU32(local));
        this.emit(Op.f64_eq);
        this.emit(Op.i32_and);
    }

    /**
     * @param {import("./intermediate").IntermediateInput} input
     */
    descendCondition (input) {
        const node = input.inputs;
        switch (input.opcode) {
        case InputOpcode.CONSTANT:
            if (typeof node.value === 'boolean') {
                this.emitI32Const(node.value ? 1 : 0);
                return;
            }
            if (typeof node.value === 'number') {
                this.emitI32Const((!Number.isNaN(node.value) && node.value !== 0) ? 1 : 0);
                return;
            }
            throw new Error('Unsupported constant type for WASM condition');
        case InputOpcode.CAST_BOOLEAN:
            if (this.supportsNumericInput(node.target)) {
                this.descendNumericInput(node.target);
                this.emitNumberTruthinessFromStack();
                return;
            }
            this.descendCondition(node.target);
            return;
        case InputOpcode.OP_AND:
            this.descendCondition(node.left);
            this.descendCondition(node.right);
            this.emit(Op.i32_and);
            return;
        case InputOpcode.OP_OR:
            this.descendCondition(node.left);
            this.descendCondition(node.right);
            this.emit(Op.i32_or);
            return;
        case InputOpcode.OP_NOT:
            this.descendCondition(node.operand);
            this.emit(Op.i32_eqz);
            return;
        case InputOpcode.OP_LESS:
            this.descendNumericInput(node.left);
            this.descendNumericInput(node.right);
            this.emit(Op.f64_lt);
            return;
        case InputOpcode.OP_GREATER:
            this.descendNumericInput(node.left);
            this.descendNumericInput(node.right);
            this.emit(Op.f64_gt);
            return;
        case InputOpcode.OP_EQUALS:
            this.descendNumericInput(node.left);
            this.descendNumericInput(node.right);
            this.emit(Op.f64_eq);
            return;
        default:
            this.descendNumericInput(input);
            this.emitNumberTruthinessFromStack();
        }
    }

    /**
     * @param {import("./intermediate").IntermediateStackBlock} block
     */
    descendStackedBlock (block) {
        const node = block.inputs;
        switch (block.opcode) {
        case StackOpcode.NOP:
            return;
        case StackOpcode.VAR_SET:
            this.descendNumericInput(node.value);
            this.emit(Op.local_set);
            this.emit(encodeU32(this.getVariableLocal(node.variable)));
            return;
        case StackOpcode.CONTROL_IF_ELSE:
            this.descendCondition(node.condition);
            this.emit(Op.if);
            this.emit(0x40);
            this.descendStack(node.whenTrue);
            this.emit(Op.else);
            this.descendStack(node.whenFalse);
            this.emit(Op.end);
            return;
        case StackOpcode.CONTROL_REPEAT: {
            if (node.times.opcode === InputOpcode.CONSTANT &&
                Number.isFinite(node.times.inputs.value) &&
                Number.isInteger(node.times.inputs.value) &&
                node.times.inputs.value >= 0) {
                const counter = this.allocateLocal(ValType.i32);
                this.emitI32Const(node.times.inputs.value);
                this.emit(Op.local_set);
                this.emit(encodeU32(counter));
                this.emit(Op.block);
                this.emit(0x40);
                this.emit(Op.loop);
                this.emit(0x40);
                this.emit(Op.local_get);
                this.emit(encodeU32(counter));
                this.emit(Op.i32_eqz);
                this.emit(Op.br_if);
                this.emit(encodeU32(1));
                this.descendStack(node.do);
                this.emit(Op.local_get);
                this.emit(encodeU32(counter));
                this.emitI32Const(1);
                this.emit(Op.i32_sub);
                this.emit(Op.local_set);
                this.emit(encodeU32(counter));
                this.emit(Op.br);
                this.emit(encodeU32(0));
                this.emit(Op.end);
                this.emit(Op.end);
                return;
            }

            const counter = this.allocateLocal(ValType.f64);
            this.descendNumericInput(node.times);
            this.emit(Op.local_set);
            this.emit(encodeU32(counter));
            this.emit(Op.block);
            this.emit(0x40);
            this.emit(Op.loop);
            this.emit(0x40);
            this.emit(Op.local_get);
            this.emit(encodeU32(counter));
            this.emitF64Const(0.5);
            this.emit(Op.f64_lt);
            this.emit(Op.br_if);
            this.emit(encodeU32(1));
            this.descendStack(node.do);
            this.emit(Op.local_get);
            this.emit(encodeU32(counter));
            this.emitF64Const(1);
            this.emit(Op.f64_sub);
            this.emit(Op.local_set);
            this.emit(encodeU32(counter));
            this.emit(Op.br);
            this.emit(encodeU32(0));
            this.emit(Op.end);
            this.emit(Op.end);
            return;
        }
        case StackOpcode.CONTROL_WHILE:
            this.emit(Op.block);
            this.emit(0x40);
            this.emit(Op.loop);
            this.emit(0x40);
            this.descendCondition(node.condition);
            this.emit(Op.i32_eqz);
            this.emit(Op.br_if);
            this.emit(encodeU32(1));
            this.descendStack(node.do);
            this.emit(Op.br);
            this.emit(encodeU32(0));
            this.emit(Op.end);
            this.emit(Op.end);
            return;
        default:
            throw new Error(`Unsupported stacked block in WASM generator: ${block.opcode}`);
        }
    }

    /**
     * @param {import("./intermediate").IntermediateStack} stack
     */
    descendStack (stack) {
        for (const block of stack.blocks) {
            this.descendStackedBlock(block);
        }
    }

    /**
     * @returns {object}
     */
    compile () {
        if (!this.supportsScript()) {
            throw new Error('Script is not supported by the WASM generator');
        }

        this.registerStack(this.script.stack);
        this.syncVariablesFromMemory();
        this.descendStack(this.script.stack);
        this.syncVariablesToMemory();
        this.emitI32Const(this.stateOffset);
        this.emitI32Const(0x7FFFFFFF);
        this.emit(Op.i32_store);
        this.emit([0x02, 0x00]);
        this.emitI32Const(0);
        this.emit(Op.return);

        return {
            format: 'wasm',
            wasmBytes: this.assemble(),
            variables: Array.from(this.variablesMap.entries()).map(([id, offset]) => ({id, offset}))
        };
    }

    /**
     * @param {number[]} payload
     * @returns {number[]}
     */
    createLocalDeclarations (payload) {
        if (this.locals.length === 0) {
            return [0];
        }

        const groups = [];
        for (const type of this.locals) {
            const last = groups[groups.length - 1];
            if (last && last.type === type) {
                last.count++;
            } else {
                groups.push({type, count: 1});
            }
        }

        payload.push(...encodeU32(groups.length));
        for (const group of groups) {
            payload.push(...encodeU32(group.count), group.type);
        }
        return payload;
    }

    /**
     * @returns {Uint8Array}
     */
    assemble () {
        const header = [0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00];

        const typePayload = [
            ...encodeU32(2),
            0x60, 0x00, 0x01, ValType.i32,
            0x60, 0x00, 0x00
        ];

        const importPayload = [
            ...encodeU32(2),
            ...encodeName('env'),
            ...encodeName('memory'),
            0x02,
            0x00,
            ...encodeU32(1),
            ...encodeName('env'),
            ...encodeName('requestRedraw'),
            0x00,
            ...encodeU32(1)
        ];

        const functionPayload = [
            ...encodeU32(1),
            ...encodeU32(0)
        ];

        const exportPayload = [
            ...encodeU32(1),
            ...encodeName('run'),
            0x00,
            ...encodeU32(1)
        ];

        const body = this.createLocalDeclarations([]);
        body.push(...this.code, Op.end);

        const codePayload = [
            ...encodeU32(1),
            ...encodeU32(body.length),
            ...body
        ];

        const createSection = (id, payload) => [id, ...encodeU32(payload.length), ...payload];

        return new Uint8Array([
            ...header,
            ...createSection(Section.type, typePayload),
            ...createSection(Section.import, importPayload),
            ...createSection(Section.function, functionPayload),
            ...createSection(Section.export, exportPayload),
            ...createSection(Section.code, codePayload)
        ]);
    }
}

module.exports = WasmGenerator;
