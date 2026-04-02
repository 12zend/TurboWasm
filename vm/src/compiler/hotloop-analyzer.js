// @ts-check

const {StackOpcode, InputOpcode, InputType} = require('./enums.js');

const LOOP_OPCODES = new Set([
    StackOpcode.CONTROL_REPEAT,
    StackOpcode.CONTROL_FOR,
    StackOpcode.CONTROL_WHILE
]);

const SAFE_STACK_OPCODES = new Set([
    StackOpcode.NOP,
    StackOpcode.VAR_SET,
    StackOpcode.CONTROL_IF_ELSE
]);

const PURE_INPUT_OPCODES = new Set([
    InputOpcode.NOP,
    InputOpcode.CONSTANT,
    InputOpcode.VAR_GET,
    InputOpcode.PROCEDURE_ARGUMENT,
    InputOpcode.CAST_BOOLEAN,
    InputOpcode.CAST_NUMBER,
    InputOpcode.CAST_NUMBER_INDEX,
    InputOpcode.CAST_NUMBER_OR_NAN,
    InputOpcode.OP_ADD,
    InputOpcode.OP_SUBTRACT,
    InputOpcode.OP_MULTIPLY,
    InputOpcode.OP_DIVIDE,
    InputOpcode.OP_MOD,
    InputOpcode.OP_ABS,
    InputOpcode.OP_FLOOR,
    InputOpcode.OP_CEILING,
    InputOpcode.OP_SQRT,
    InputOpcode.OP_SIN,
    InputOpcode.OP_COS,
    InputOpcode.OP_TAN,
    InputOpcode.OP_ASIN,
    InputOpcode.OP_ACOS,
    InputOpcode.OP_ATAN,
    InputOpcode.OP_LOG_E,
    InputOpcode.OP_LOG_10,
    InputOpcode.OP_POW_E,
    InputOpcode.OP_POW_10,
    InputOpcode.OP_ROUND,
    InputOpcode.OP_EQUALS,
    InputOpcode.OP_GREATER,
    InputOpcode.OP_LESS,
    InputOpcode.OP_NOT,
    InputOpcode.OP_AND,
    InputOpcode.OP_OR
]);

const ARITHMETIC_INPUT_OPCODES = new Set([
    InputOpcode.OP_ADD,
    InputOpcode.OP_SUBTRACT,
    InputOpcode.OP_MULTIPLY,
    InputOpcode.OP_DIVIDE,
    InputOpcode.OP_MOD,
    InputOpcode.OP_ABS,
    InputOpcode.OP_FLOOR,
    InputOpcode.OP_CEILING,
    InputOpcode.OP_SQRT,
    InputOpcode.OP_SIN,
    InputOpcode.OP_COS,
    InputOpcode.OP_TAN,
    InputOpcode.OP_ASIN,
    InputOpcode.OP_ACOS,
    InputOpcode.OP_ATAN,
    InputOpcode.OP_LOG_E,
    InputOpcode.OP_LOG_10,
    InputOpcode.OP_POW_E,
    InputOpcode.OP_POW_10,
    InputOpcode.OP_ROUND
]);

const TIMER_INPUT_OPCODES = new Set([
    InputOpcode.SENSING_TIMER_GET,
    InputOpcode.SENSING_TIME_YEAR,
    InputOpcode.SENSING_TIME_MONTH,
    InputOpcode.SENSING_TIME_DATE,
    InputOpcode.SENSING_TIME_WEEKDAY,
    InputOpcode.SENSING_TIME_HOUR,
    InputOpcode.SENSING_TIME_MINUTE,
    InputOpcode.SENSING_TIME_SECOND,
    InputOpcode.SENSING_TIME_DAYS_SINCE_2000
]);

const IO_INPUT_OPCODES = new Set([
    InputOpcode.SENSING_ANSWER,
    InputOpcode.SENSING_COLOR_TOUCHING_COLOR,
    InputOpcode.SENSING_DISTANCE,
    InputOpcode.SENSING_KEY_DOWN,
    InputOpcode.SENSING_MOUSE_DOWN,
    InputOpcode.SENSING_MOUSE_X,
    InputOpcode.SENSING_MOUSE_Y,
    InputOpcode.SENSING_OF,
    InputOpcode.SENSING_OF_BACKDROP_NAME,
    InputOpcode.SENSING_OF_BACKDROP_NUMBER,
    InputOpcode.SENSING_OF_COSTUME_NAME,
    InputOpcode.SENSING_OF_COSTUME_NUMBER,
    InputOpcode.SENSING_OF_DIRECTION,
    InputOpcode.SENSING_OF_POS_X,
    InputOpcode.SENSING_OF_POS_Y,
    InputOpcode.SENSING_OF_SIZE,
    InputOpcode.SENSING_OF_VAR,
    InputOpcode.SENSING_OF_VOLUME,
    InputOpcode.SENSING_TOUCHING_COLOR,
    InputOpcode.SENSING_TOUCHING_OBJECT,
    InputOpcode.SENSING_USERNAME,
    InputOpcode.TW_KEY_LAST_PRESSED,
    InputOpcode.MOTION_X_GET,
    InputOpcode.MOTION_Y_GET,
    InputOpcode.MOTION_DIRECTION_GET,
    InputOpcode.LOOKS_BACKDROP_NAME,
    InputOpcode.LOOKS_BACKDROP_NUMBER,
    InputOpcode.LOOKS_COSTUME_NAME,
    InputOpcode.LOOKS_COSTUME_NUMBER,
    InputOpcode.LOOKS_SIZE_GET,
    InputOpcode.CONTROL_COUNTER
]);

const LIST_INPUT_OPCODES = new Set([
    InputOpcode.LIST_GET,
    InputOpcode.LIST_LENGTH,
    InputOpcode.LIST_CONTAINS,
    InputOpcode.LIST_INDEX_OF,
    InputOpcode.LIST_CONTENTS
]);

const JS_ONLY_STACK_PREFIXES = [
    'looks.',
    'motion.',
    'pen.'
];

const isNumericLikeType = type => (type & InputType.NUMBER_OR_NAN) === type;

const isFloat32Constant = value => {
    if (typeof value !== 'number') return false;
    if (!Number.isFinite(value)) return false;
    return Math.fround(value) === value;
};

class HotLoopAnalyzer {
    /**
     * @param {import('./intermediate').IntermediateRepresentation} ir
     */
    constructor (ir) {
        this.ir = ir;
        this.nextLoopId = 0;
    }

    analyze () {
        const hotLoops = [];
        this._analyzeScript(this.ir.entry, 'entry', hotLoops);
        for (const procedureVariant of Object.keys(this.ir.procedures)) {
            this._analyzeScript(this.ir.procedures[procedureVariant], procedureVariant, hotLoops);
        }
        this.ir.hotLoops = hotLoops;
        return hotLoops;
    }

    /**
     * @param {import('./intermediate').IntermediateScript} script
     * @param {string} scriptId
     * @param {object[]} hotLoops
     * @private
     */
    _analyzeScript (script, scriptId, hotLoops) {
        script.loopSummaries = [];
        if (!script.stack) {
            return;
        }
        this._scanStack(script.stack, script, scriptId, hotLoops);
    }

    /**
     * @param {import('./intermediate').IntermediateStack} stack
     * @param {import('./intermediate').IntermediateScript} script
     * @param {string} scriptId
     * @param {object[]} hotLoops
     * @private
     */
    _scanStack (stack, script, scriptId, hotLoops) {
        for (const block of stack.blocks) {
            if (LOOP_OPCODES.has(block.opcode)) {
                const summary = this._analyzeLoop(block, script, scriptId);
                block.loopSummary = summary;
                script.loopSummaries.push(summary);
                hotLoops.push(summary);
            }
            this._scanChildStacks(block, script, scriptId, hotLoops);
        }
    }

    /**
     * @param {import('./intermediate').IntermediateStackBlock} block
     * @param {import('./intermediate').IntermediateScript} script
     * @param {string} scriptId
     * @returns {object}
     * @private
     */
    _analyzeLoop (block, script, scriptId) {
        const state = {
            totalStackBlocks: 0,
            arithmeticOps: 0,
            branchCount: 0,
            hasNestedLoop: false,
            effectProfile: {
                hasYieldingBlock: false,
                hasCompatibilityLayer: false,
                hasProcedureCall: false,
                hasBroadcast: false,
                hasTimer: false,
                hasRandom: false,
                hasIO: false,
                hasListMutation: false,
                hasVariableMutation: false,
                hasAddonCall: false,
                hasUnsupportedStack: false,
                hasUnsupportedInput: false,
                requiresJSRuntime: false
            },
            numericDomain: {
                pureNumeric: true,
                hasListAccess: false,
                hasMixedTypeRisk: false,
                hasStringRisk: false,
                hasNonFiniteRisk: false,
                hasUnknownRange: false,
                fp32Safe: true
            }
        };

        this._scanLoopHeader(block, state);
        this._scanStackBody(block.inputs.do, state, false);

        const iterationCount = this._estimateIterationCount(block);
        if (state.numericDomain.hasStringRisk || state.numericDomain.hasMixedTypeRisk) {
            state.numericDomain.pureNumeric = false;
        }
        if (state.numericDomain.hasNonFiniteRisk || state.numericDomain.hasUnknownRange) {
            state.numericDomain.fp32Safe = false;
        }
        if (state.effectProfile.requiresJSRuntime || state.hasNestedLoop) {
            state.numericDomain.pureNumeric = false;
            state.numericDomain.fp32Safe = false;
        }

        const estimatedIterations = Number.isFinite(iterationCount.exact) ? iterationCount.exact :
            Number.isFinite(iterationCount.maximum) ? iterationCount.maximum : null;
        const hotness = estimatedIterations === null ? null : estimatedIterations * Math.max(state.arithmeticOps, 1);
        const isWarp = script.isWarp && !block.inputs.warpTimer;

        return {
            loopId: `${scriptId}:loop${this.nextLoopId++}`,
            opcode: block.opcode,
            scriptId,
            isWarp,
            usesWarpTimer: Boolean(block.inputs.warpTimer),
            hasNestedLoop: state.hasNestedLoop,
            totalStackBlocks: state.totalStackBlocks,
            arithmeticOps: state.arithmeticOps,
            branchCount: state.branchCount,
            iterationCount,
            estimatedIterations,
            hotness,
            effectProfile: state.effectProfile,
            numericDomain: state.numericDomain
        };
    }

    /**
     * @param {import('./intermediate').IntermediateStackBlock} block
     * @param {object} state
     * @private
     */
    _scanLoopHeader (block, state) {
        if (block.opcode === StackOpcode.CONTROL_REPEAT) {
            this._scanInput(block.inputs.times, state);
        } else if (block.opcode === StackOpcode.CONTROL_FOR) {
            this._scanInput(block.inputs.count, state);
        } else if (block.opcode === StackOpcode.CONTROL_WHILE) {
            this._scanInput(block.inputs.condition, state);
        }
    }

    /**
     * @param {import('./intermediate').IntermediateStack|null} stack
     * @param {object} state
     * @param {boolean} nested
     * @private
     */
    _scanStackBody (stack, state, nested) {
        if (!stack) {
            return;
        }
        for (const block of stack.blocks) {
            this._scanBlock(block, state, nested);
        }
    }

    /**
     * @param {import('./intermediate').IntermediateStackBlock} block
     * @param {object} state
     * @param {boolean} nested
     * @private
     */
    _scanBlock (block, state, nested) {
        state.totalStackBlocks++;
        if (block.yields) {
            state.effectProfile.hasYieldingBlock = true;
            state.effectProfile.requiresJSRuntime = true;
        }

        if (LOOP_OPCODES.has(block.opcode)) {
            state.hasNestedLoop = true;
            this._scanLoopHeader(block, state);
            this._scanStackBody(block.inputs.do, state, true);
            return;
        }

        if (nested) {
            state.hasNestedLoop = true;
        }

        switch (block.opcode) {
        case StackOpcode.NOP:
            break;
        case StackOpcode.VAR_SET:
            state.effectProfile.hasVariableMutation = true;
            this._scanInput(block.inputs.value, state);
            if (!isNumericLikeType(block.inputs.value.type)) {
                state.numericDomain.pureNumeric = false;
                state.numericDomain.fp32Safe = false;
            }
            break;
        case StackOpcode.CONTROL_IF_ELSE:
            state.branchCount++;
            this._scanInput(block.inputs.condition, state);
            this._scanStackBody(block.inputs.whenTrue, state, nested);
            this._scanStackBody(block.inputs.whenFalse, state, nested);
            break;
        case StackOpcode.LIST_ADD:
        case StackOpcode.LIST_INSERT:
        case StackOpcode.LIST_REPLACE:
        case StackOpcode.LIST_DELETE:
        case StackOpcode.LIST_DELETE_ALL:
            state.effectProfile.hasListMutation = true;
            state.numericDomain.hasListAccess = true;
            state.numericDomain.hasMixedTypeRisk = true;
            this._scanInputsObject(block.inputs, state);
            break;
        case StackOpcode.COMPATIBILITY_LAYER:
        case StackOpcode.OLD_COMPILER_COMPATIBILITY_LAYER:
            state.effectProfile.hasCompatibilityLayer = true;
            state.effectProfile.requiresJSRuntime = true;
            this._scanCompatibilityBlock(block, state, nested);
            break;
        case StackOpcode.PROCEDURE_CALL:
            state.effectProfile.hasProcedureCall = true;
            state.effectProfile.requiresJSRuntime = true;
            this._scanInputsObject(block.inputs, state);
            break;
        case StackOpcode.EVENT_BROADCAST:
        case StackOpcode.EVENT_BROADCAST_AND_WAIT:
            state.effectProfile.hasBroadcast = true;
            state.effectProfile.requiresJSRuntime = true;
            this._scanInputsObject(block.inputs, state);
            break;
        case StackOpcode.CONTROL_WAIT:
        case StackOpcode.CONTROL_WAIT_UNTIL:
        case StackOpcode.CONTROL_STOP_ALL:
        case StackOpcode.CONTROL_STOP_OTHERS:
        case StackOpcode.CONTROL_STOP_SCRIPT:
        case StackOpcode.CONTROL_CLONE_CREATE:
        case StackOpcode.CONTROL_CLONE_DELETE:
        case StackOpcode.CONTROL_CLEAR_COUNTER:
        case StackOpcode.CONTORL_INCR_COUNTER:
        case StackOpcode.SENSING_TIMER_RESET:
        case StackOpcode.LIST_SHOW:
        case StackOpcode.LIST_HIDE:
        case StackOpcode.VAR_SHOW:
        case StackOpcode.VAR_HIDE:
            state.effectProfile.requiresJSRuntime = true;
            this._scanInputsObject(block.inputs, state);
            break;
        default:
            if (SAFE_STACK_OPCODES.has(block.opcode)) {
                this._scanInputsObject(block.inputs, state);
            } else if (JS_ONLY_STACK_PREFIXES.some(prefix => block.opcode.startsWith(prefix))) {
                state.effectProfile.requiresJSRuntime = true;
                this._scanInputsObject(block.inputs, state);
            } else {
                state.effectProfile.hasUnsupportedStack = true;
                state.effectProfile.requiresJSRuntime = true;
                this._scanInputsObject(block.inputs, state);
            }
            break;
        }
    }

    /**
     * @param {import('./intermediate').IntermediateStackBlock} block
     * @param {object} state
     * @param {boolean} nested
     * @private
     */
    _scanCompatibilityBlock (block, state, nested) {
        this._scanInputsObject(block.inputs, state);
        if (block.inputs.substacks) {
            for (const substackName of Object.keys(block.inputs.substacks)) {
                this._scanStackBody(block.inputs.substacks[substackName], state, nested);
            }
        }
    }

    /**
     * @param {object} inputs
     * @param {object} state
     * @private
     */
    _scanInputsObject (inputs, state) {
        for (const inputName of Object.keys(inputs)) {
            const input = inputs[inputName];
            if (input && input.inputs && typeof input.opcode === 'string') {
                this._scanInput(input, state);
            } else if (input && typeof input === 'object' && !input.blocks) {
                this._scanInputsObject(input, state);
            }
        }
    }

    /**
     * @param {import('./intermediate').IntermediateInput} input
     * @param {object} state
     * @private
     */
    _scanInput (input, state) {
        if (input.yields) {
            state.effectProfile.hasYieldingBlock = true;
            state.effectProfile.requiresJSRuntime = true;
        }

        if (ARITHMETIC_INPUT_OPCODES.has(input.opcode)) {
            state.arithmeticOps++;
        }

        if (input.isSometimesType(InputType.STRING)) {
            state.numericDomain.hasStringRisk = true;
        }
        if (input.isSometimesType(InputType.NUMBER_NAN | InputType.NUMBER_INF)) {
            state.numericDomain.hasNonFiniteRisk = true;
        }

        switch (input.opcode) {
        case InputOpcode.CONSTANT:
            if (!isFloat32Constant(input.inputs.value)) {
                state.numericDomain.fp32Safe = false;
            }
            return;
        case InputOpcode.VAR_GET:
        case InputOpcode.PROCEDURE_ARGUMENT:
            state.numericDomain.hasUnknownRange = true;
            return;
        case InputOpcode.OP_RANDOM:
            state.effectProfile.hasRandom = true;
            state.effectProfile.requiresJSRuntime = true;
            state.numericDomain.pureNumeric = false;
            break;
        case InputOpcode.ADDON_CALL:
            state.effectProfile.hasAddonCall = true;
            state.effectProfile.requiresJSRuntime = true;
            state.numericDomain.pureNumeric = false;
            break;
        case InputOpcode.COMPATIBILITY_LAYER:
        case InputOpcode.OLD_COMPILER_COMPATIBILITY_LAYER:
        case InputOpcode.PROCEDURE_CALL:
            state.effectProfile.hasCompatibilityLayer = true;
            state.effectProfile.requiresJSRuntime = true;
            state.numericDomain.pureNumeric = false;
            break;
        default:
            if (TIMER_INPUT_OPCODES.has(input.opcode)) {
                state.effectProfile.hasTimer = true;
                state.effectProfile.requiresJSRuntime = true;
                state.numericDomain.pureNumeric = false;
            } else if (IO_INPUT_OPCODES.has(input.opcode)) {
                state.effectProfile.hasIO = true;
                state.effectProfile.requiresJSRuntime = true;
                state.numericDomain.pureNumeric = false;
            } else if (LIST_INPUT_OPCODES.has(input.opcode)) {
                state.numericDomain.hasListAccess = true;
                if (input.opcode !== InputOpcode.LIST_LENGTH && input.opcode !== InputOpcode.LIST_INDEX_OF) {
                    state.numericDomain.hasMixedTypeRisk = true;
                }
            } else if (!PURE_INPUT_OPCODES.has(input.opcode)) {
                state.effectProfile.hasUnsupportedInput = true;
                state.effectProfile.requiresJSRuntime = true;
                state.numericDomain.pureNumeric = false;
            }
            break;
        }

        this._scanInputsObject(input.inputs, state);
    }

    /**
     * @param {import('./intermediate').IntermediateStackBlock} block
     * @returns {{kind: string, exact: number|null, minimum: number|null, maximum: number|null}}
     * @private
     */
    _estimateIterationCount (block) {
        if (block.opcode === StackOpcode.CONTROL_REPEAT) {
            const exact = this._readConstantNumber(block.inputs.times);
            if (exact !== null) {
                const count = !Number.isFinite(exact) ? Infinity : Math.max(0, Math.floor(exact + 0.5));
                return {
                    kind: 'constant',
                    exact: count,
                    minimum: count,
                    maximum: count
                };
            }
            return {
                kind: 'unknown',
                exact: null,
                minimum: 0,
                maximum: null
            };
        }

        if (block.opcode === StackOpcode.CONTROL_FOR) {
            const exact = this._readConstantNumber(block.inputs.count);
            if (exact !== null) {
                const count = !Number.isFinite(exact) ? Infinity : Math.max(0, Math.ceil(exact));
                return {
                    kind: 'constant',
                    exact: count,
                    minimum: count,
                    maximum: count
                };
            }
            return {
                kind: 'range',
                exact: null,
                minimum: 0,
                maximum: null
            };
        }

        return {
            kind: 'unknown',
            exact: null,
            minimum: 0,
            maximum: null
        };
    }

    /**
     * @param {import('./intermediate').IntermediateInput} input
     * @returns {number|null}
     * @private
     */
    _readConstantNumber (input) {
        if (input.opcode !== InputOpcode.CONSTANT) {
            return null;
        }
        const value = input.inputs.value;
        if (typeof value !== 'number') {
            return null;
        }
        return value;
    }

    /**
     * @param {import('./intermediate').IntermediateStackBlock} block
     * @param {import('./intermediate').IntermediateScript} script
     * @param {string} scriptId
     * @param {object[]} hotLoops
     * @private
     */
    _scanChildStacks (block, script, scriptId, hotLoops) {
        if (block.inputs && block.inputs.do && block.inputs.do.blocks) {
            this._scanStack(block.inputs.do, script, scriptId, hotLoops);
        }
        if (block.opcode === StackOpcode.CONTROL_IF_ELSE) {
            this._scanStack(block.inputs.whenTrue, script, scriptId, hotLoops);
            this._scanStack(block.inputs.whenFalse, script, scriptId, hotLoops);
        } else if (block.opcode === StackOpcode.COMPATIBILITY_LAYER && block.inputs.substacks) {
            for (const substackName of Object.keys(block.inputs.substacks)) {
                this._scanStack(block.inputs.substacks[substackName], script, scriptId, hotLoops);
            }
        }
    }
}

module.exports = {
    HotLoopAnalyzer
};
