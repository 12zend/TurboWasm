// @ts-check

const {StackOpcode, InputOpcode} = require('./enums.js');

/**
 * @fileoverview Convert intermediate representations to WebAssembly binaries.
 */

// Wasm Opcodes
const Op = {
    unreachable: 0x00,
    nop: 0x01,
    block: 0x02,
    loop: 0x03,
    if: 0x04,
    else: 0x05,
    end: 0x0b,
    br: 0x0c,
    br_if: 0x0d,
    return: 0x0f,
    call: 0x10,
    drop: 0x1a,
    select: 0x1b,
    local_get: 0x20,
    local_set: 0x21,
    local_tee: 0x22,
    global_get: 0x23,
    global_set: 0x24,
    i32_load: 0x28,
    f64_load: 0x2b,
    i32_store: 0x36,
    f64_store: 0x39,
    i32_const: 0x41,
    i64_const: 0x42,
    f32_const: 0x43,
    f64_const: 0x44,
    f64_eq: 0x61,
    f64_ne: 0x62,
    f64_lt: 0x63,
    f64_gt: 0x64,
    f64_le: 0x65,
    f64_ge: 0x66,
    f64_add: 0xa0,
    f64_sub: 0xa1,
    f64_mul: 0xa2,
    f64_div: 0xa3,
    i32_add: 0x6a,
    br_table: 0x0e
};

// Section IDs
const Section = {
    type: 1,
    import: 2,
    function: 3,
    table: 4,
    memory: 5,
    global: 6,
    export: 7,
    start: 8,
    element: 9,
    code: 10,
    data: 11
};

// Value Types
const ValType = {
    i32: 0x7f,
    f64: 0x7c
};

/**
 * Encodes a LEB128 unsigned integer.
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
 * Encodes a floating point number.
 * @param {number} n
 * @returns {Uint8Array}
 */
const encodeF64 = n => {
    const buf = new ArrayBuffer(8);
    new DataView(buf).setFloat64(0, n, true);
    return new Uint8Array(buf);
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
        
        /** @type {number[]} */
        this.yieldPoints = []; // Positions for br_table
        this.currentState = 0;
        
        // Memory offset for thread state
        this.stateOffset = 0;
        // Memory offset for variables
        this.variableBaseOffset = 1024;
    }

    supportsInput (input) {
        switch (input.opcode) {
        case InputOpcode.CONSTANT:
        case InputOpcode.VAR_GET:
            return true;

        case InputOpcode.CAST_NUMBER:
        case InputOpcode.CAST_NUMBER_OR_NAN:
        case InputOpcode.CAST_NUMBER_INDEX:
            return this.supportsInput(input.inputs.target);

        case InputOpcode.OP_ADD:
        case InputOpcode.OP_SUBTRACT:
        case InputOpcode.OP_MULTIPLY:
        case InputOpcode.OP_DIVIDE:
        case InputOpcode.OP_LESS:
            return this.supportsInput(input.inputs.left) && this.supportsInput(input.inputs.right);

        default:
            return false;
        }
    }

    supportsStackedBlock (block) {
        if (block.yields) {
            return false;
        }

        const node = block.inputs;
        switch (block.opcode) {
        case StackOpcode.VAR_SET:
            return this.supportsInput(node.value);

        case StackOpcode.CONTROL_REPEAT:
            return this.supportsInput(node.times) && this.supportsStack(node.do);

        default:
            return false;
        }
    }

    supportsStack (stack) {
        for (const block of stack.blocks) {
            if (!this.supportsStackedBlock(block)) {
                return false;
            }
        }
        return true;
    }

    supportsScript () {
        return (
            Boolean(this.script.stack) &&
            !this.script.yields &&
            this.supportsStack(this.script.stack)
        );
    }

    /**
     * @param {number | number[]} bytes
     */
    emit (bytes) {
        if (Array.isArray(bytes)) {
            for (const b of bytes) this.code.push(b);
        } else {
            this.code.push(bytes);
        }
    }

    /**
     * Generates a yield point.
     */
    yieldPoint () {
        const nextState = ++this.currentState;
        
        // Save state to memory
        this.emit(Op.i32_const);
        this.emit(encodeU32(this.stateOffset));
        this.emit(Op.i32_const);
        this.emit(encodeU32(nextState));
        this.emit(Op.i32_store);
        this.emit([0x02, 0x00]); // align 2, offset 0
        
        // Return 1 (STATUS_YIELD)
        this.emit(Op.i32_const);
        this.emit(encodeU32(1));
        this.emit(Op.return);
        
        // Mark re-entry point
        this.yieldPoints.push(this.code.length);
    }

    /**
     * @param {import("./intermediate").IntermediateInput} block
     */
    descendInput (block) {
        const node = block.inputs;
        switch (block.opcode) {
        case InputOpcode.CONSTANT:
            if (typeof node.value === 'number') {
                this.emit(Op.f64_const);
                this.emit(Array.from(encodeF64(node.value)));
            } else {
                this.emit(Op.f64_const);
                this.emit(Array.from(encodeF64(node.value ? 1 : 0)));
            }
            break;

        case InputOpcode.CAST_NUMBER:
        case InputOpcode.CAST_NUMBER_OR_NAN:
        case InputOpcode.CAST_NUMBER_INDEX:
            this.descendInput(node.target);
            break;

        case InputOpcode.VAR_GET: {
            const offset = this.getVariableOffset(node.variable);
            this.emit(Op.i32_const);
            this.emit(encodeU32(offset));
            this.emit(Op.f64_load);
            this.emit([0x03, 0x00]);
            break;
        }

        case InputOpcode.OP_ADD:
            this.descendInput(node.left);
            this.descendInput(node.right);
            this.emit(Op.f64_add);
            break;
        case InputOpcode.OP_SUBTRACT:
            this.descendInput(node.left);
            this.descendInput(node.right);
            this.emit(Op.f64_sub);
            break;
        case InputOpcode.OP_MULTIPLY:
            this.descendInput(node.left);
            this.descendInput(node.right);
            this.emit(Op.f64_mul);
            break;
        case InputOpcode.OP_DIVIDE:
            this.descendInput(node.left);
            this.descendInput(node.right);
            this.emit(Op.f64_div);
            break;
            
        case InputOpcode.OP_LESS:
            this.descendInput(node.left);
            this.descendInput(node.right);
            this.emit(Op.f64_lt);
            break;

        default:
            this.emit(Op.f64_const);
            this.emit(Array.from(encodeF64(0)));
        }
    }

    /**
     * @param {import("./intermediate").IntermediateStackBlock} block
     */
    descendStackedBlock (block) {
        const node = block.inputs;
        switch (block.opcode) {
        case StackOpcode.VAR_SET: {
            const offset = this.getVariableOffset(node.variable);
            this.emit(Op.i32_const);
            this.emit(encodeU32(offset));
            this.descendInput(node.value);
            this.emit(Op.f64_store);
            this.emit([0x03, 0x00]);
            break;
        }
        
        case StackOpcode.CONTROL_WAIT:
            this.yieldPoint();
            break;

        case StackOpcode.CONTROL_REPEAT: {
            this.descendInput(node.times);
            this.emit(Op.local_set);
            this.emit(encodeU32(0));
            
            this.emit(Op.loop);
            this.emit(0x40); // void
            
            this.emit(Op.local_get);
            this.emit(encodeU32(0));
            this.emit(Op.f64_const);
            this.emit(Array.from(encodeF64(0.5)));
            this.emit(Op.f64_ge);
            
            this.emit(Op.if);
            this.emit(0x40);
            
            this.descendStack(node.do);
            
            this.emit(Op.local_get);
            this.emit(encodeU32(0));
            this.emit(Op.f64_const);
            this.emit(Array.from(encodeF64(1)));
            this.emit(Op.f64_sub);
            this.emit(Op.local_set);
            this.emit(encodeU32(0));
            
            this.emit(Op.br);
            this.emit(encodeU32(1));
            
            this.emit(Op.end);
            this.emit(Op.end);
            break;
        }

        default:
            // Skip unknown
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
     * @param {any} variable
     * @returns {number} Memory offset
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
     * Compiles the script into a Wasm factory.
     * @returns {object}
     */
    compile () {
        if (!this.supportsScript()) {
            throw new Error('Script is not supported by the WASM generator');
        }

        if (this.script.stack) {
            this.descendStack(this.script.stack);
        }
        
        // Final state: Done
        this.emit(Op.i32_const);
        this.emit(encodeU32(this.stateOffset));
        this.emit(Op.i32_const);
        this.emit(encodeU32(0x7FFFFFFF)); // Special "Done" state
        this.emit(Op.i32_store);
        this.emit([0x02, 0x00]);
        this.emit(Op.i32_const);
        this.emit(encodeU32(0)); // STATUS_DONE
        this.emit(Op.return);

        const wasmBytes = this.assemble();

        return {
            format: 'wasm',
            wasmBytes,
            variables: Array.from(this.variablesMap.entries()).map(([id, offset]) => ({id, offset}))
        };
    }

    assemble () {
        const header = [0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00];
        
        // Construct the state machine wrapper
        // block
        //   block (yield 1)
        //     block (yield 0)
        //       global_get state
        //       br_table 0 1 ...
        //     end
        //     (code for state 0)
        //   end
        //   (code for state 1)
        // end

        const wrappedCode = [];
        const numStates = this.currentState + 1;
        
        // Outer blocks for each state
        for (let i = 0; i < numStates; i++) {
            wrappedCode.push(Op.block);
            wrappedCode.push(0x40);
        }

        // br_table dispatcher
        wrappedCode.push(Op.i32_const);
        wrappedCode.push(...encodeU32(this.stateOffset));
        wrappedCode.push(Op.i32_load);
        wrappedCode.push(0x02, 0x00);
        
        wrappedCode.push(Op.br_table);
        wrappedCode.push(...encodeU32(numStates - 1));
        for (let i = 0; i < numStates; i++) {
            wrappedCode.push(...encodeU32(i));
        }

        // Now we need to interleave the actual code with the 'end' markers
        // This is tricky with my current 'emit' approach.
        // For the prototype, I'll just stick to the linear execution if no yields.
        // If yields exist, I'll need a more sophisticated IR-to-Wasm mapper.

        // Given the time constraints, I'll provide the linear code as a fallback.
        const codeBody = [
            ...encodeU32(1), // groups
            ...encodeU32(1), // count
            ValType.f64, // local 0
            ...this.code,
            Op.end
        ];

        // ... sections same as before ...
        const typeSection = [
            Section.type,
            ...encodeU32(7),
            ...encodeU32(2),
            0x60,
            0,
            1,
            ValType.i32,
            0x60,
            0,
            0
        ];
        typeSection[1] = typeSection.length - 2;
        const importSection = [
            Section.import,
            ...encodeU32(23),
            ...encodeU32(2),
            3,
            0x65,
            0x6e,
            0x76,
            6,
            0x6d,
            0x65,
            0x6d,
            0x6f,
            0x72,
            0x79,
            0x02,
            0x00,
            ...encodeU32(1),
            3,
            0x65,
            0x6e,
            0x76,
            13,
            0x72,
            0x65,
            0x71,
            0x75,
            0x65,
            0x73,
            0x74,
            0x52,
            0x65,
            0x64,
            0x72,
            0x61,
            0x77,
            0x00,
            ...encodeU32(1)
        ];
        importSection[1] = importSection.length - 2;
        const funcSection = [Section.function, ...encodeU32(2), ...encodeU32(1), 0];
        const exportSection = [Section.export, ...encodeU32(7), ...encodeU32(1), 3, 0x72, 0x75, 0x6e, 0x00, 1];
        exportSection[1] = exportSection.length - 2;
        const codeSection = [
            Section.code,
            ...encodeU32(codeBody.length + 2),
            ...encodeU32(1),
            ...encodeU32(codeBody.length),
            ...codeBody
        ];

        return new Uint8Array([
            ...header,
            ...typeSection,
            ...importSection,
            ...funcSection,
            ...exportSection,
            ...codeSection
        ]);
    }
}

module.exports = WasmGenerator;
