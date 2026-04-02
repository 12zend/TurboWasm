// @ts-check

class OffloadPlanner {
    /**
     * @param {import('./intermediate').IntermediateRepresentation} ir
     * @param {object[]} hotLoops
     * @param {object} runtimeCaps
     */
    constructor (ir, hotLoops, runtimeCaps = {}) {
        this.ir = ir;
        this.hotLoops = hotLoops;
        this.runtimeCaps = runtimeCaps;
    }

    plan () {
        const plans = [];
        for (const summary of this.hotLoops) {
            const plan = this._planLoop(summary);
            summary.kernelPlan = plan;
            plans.push(plan);
        }

        this.ir.offloadPlans = plans;
        this._attachPlansToBlocks();
        this._attachPlansToScripts();
        return plans;
    }

    /**
     * @private
     */
    _attachPlansToBlocks () {
        const planMap = new Map(this.ir.offloadPlans.map(plan => [plan.loopId, plan]));
        const attachInStack = stack => {
            if (!stack) {
                return;
            }
            for (const block of stack.blocks) {
                if (block.loopSummary) {
                    block.kernelPlan = planMap.get(block.loopSummary.loopId) || null;
                }
                if (block.inputs && block.inputs.do && block.inputs.do.blocks) {
                    attachInStack(block.inputs.do);
                }
                if (block.inputs && block.inputs.whenTrue && block.inputs.whenTrue.blocks) {
                    attachInStack(block.inputs.whenTrue);
                }
                if (block.inputs && block.inputs.whenFalse && block.inputs.whenFalse.blocks) {
                    attachInStack(block.inputs.whenFalse);
                }
                if (block.inputs && block.inputs.substacks) {
                    for (const substackName of Object.keys(block.inputs.substacks)) {
                        attachInStack(block.inputs.substacks[substackName]);
                    }
                }
            }
        };

        attachInStack(this.ir.entry.stack);
        for (const procedureVariant of Object.keys(this.ir.procedures)) {
            attachInStack(this.ir.procedures[procedureVariant].stack);
        }
    }

    /**
     * @private
     */
    _attachPlansToScripts () {
        this.ir.entry.offloadPlans = [];
        for (const procedureVariant of Object.keys(this.ir.procedures)) {
            this.ir.procedures[procedureVariant].offloadPlans = [];
        }

        for (const plan of this.ir.offloadPlans) {
            const script = plan.scriptId === 'entry' ? this.ir.entry : this.ir.procedures[plan.scriptId];
            if (script) {
                script.offloadPlans.push(plan);
            }
        }
    }

    /**
     * @param {object} summary
     * @returns {object}
     * @private
     */
    _planLoop (summary) {
        const offload = Object.assign({
            enabled: false,
            wasm: true,
            webgl: true,
            minWasmIterations: 256,
            minWebGLElements: 4096,
            verifyGPU: 'conservative'
        }, this.runtimeCaps.offload || {});
        const backends = Object.assign({
            wasm: false,
            webgl: false
        }, this.runtimeCaps.backends || {});

        const reasons = [];
        const candidateBackends = ['js'];

        if (!offload.enabled) {
            reasons.push('offload-disabled');
        } else if (!summary.isWarp) {
            reasons.push('non-warp-loop');
        } else if (summary.usesWarpTimer) {
            reasons.push('warp-timer-loop');
        } else if (summary.hasNestedLoop) {
            reasons.push('nested-loop');
        } else if (summary.effectProfile.requiresJSRuntime) {
            reasons.push('js-runtime-effects');
        } else if (!summary.numericDomain.pureNumeric) {
            reasons.push('non-numeric-domain');
        } else {
            if (offload.wasm && this._meetsWasmThreshold(summary, offload)) {
                candidateBackends.push('wasm');
            }
            if (offload.webgl && this._meetsWebGLThreshold(summary, offload)) {
                candidateBackends.push('webgl');
            }
            if (candidateBackends.length === 1) {
                reasons.push('below-offload-threshold');
            }
        }

        const preferredBackend = candidateBackends.includes('webgl') ? 'webgl' :
            candidateBackends.includes('wasm') ? 'wasm' : 'js';
        let selectedBackend = preferredBackend;

        if (selectedBackend === 'wasm' && !backends.wasm) {
            selectedBackend = 'js';
            reasons.push('wasm-backend-unavailable');
        }
        if (selectedBackend === 'webgl' && !backends.webgl) {
            selectedBackend = candidateBackends.includes('wasm') && backends.wasm ? 'wasm' : 'js';
            reasons.push('webgl-backend-unavailable');
            if (selectedBackend === 'js' && candidateBackends.includes('wasm') && !backends.wasm) {
                reasons.push('wasm-backend-unavailable');
            }
        }

        return {
            loopId: summary.loopId,
            scriptId: summary.scriptId,
            opcode: summary.opcode,
            selectedBackend,
            preferredBackend,
            candidateBackends,
            verifyGPU: offload.verifyGPU,
            reasons
        };
    }

    /**
     * @param {object} summary
     * @param {object} offload
     * @returns {boolean}
     * @private
     */
    _meetsWasmThreshold (summary, offload) {
        if (summary.estimatedIterations === null || !Number.isFinite(summary.estimatedIterations)) {
            return false;
        }
        return summary.estimatedIterations >= offload.minWasmIterations;
    }

    /**
     * @param {object} summary
     * @param {object} offload
     * @returns {boolean}
     * @private
     */
    _meetsWebGLThreshold (summary, offload) {
        if (!summary.numericDomain.hasListAccess) {
            return false;
        }
        if (!summary.numericDomain.fp32Safe) {
            return false;
        }
        if (summary.estimatedIterations === null || !Number.isFinite(summary.estimatedIterations)) {
            return false;
        }
        if (summary.arithmeticOps < 20) {
            return false;
        }
        return summary.estimatedIterations >= offload.minWebGLElements;
    }
}

module.exports = {
    OffloadPlanner
};
