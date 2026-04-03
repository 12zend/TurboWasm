/**
 * @fileoverview
 * Utility to manage GPU-based (WebGL) calculations.
 */

class GpuOptimizer {
    constructor () {
        this.gl = null;
        this.canvas = null;
        this.ready = false;
        this.minimumBatchSize = 2048;
    }

    init () {
        if (this.ready) {
            return;
        }

        if (typeof document === 'undefined') {
            return;
        }

        try {
            this.canvas = document.createElement('canvas');
            this.gl = this.canvas.getContext('webgl') || this.canvas.getContext('experimental-webgl');
            if (this.gl) {
                this.ready = true;
            }
        } catch (e) {
            console.warn('GPU initialization failed', e);
        }
    }

    /**
     * Decide whether a distance batch is worth moving to the GPU.
     * Readback-heavy workloads stay on the CPU unless the batch is large.
     * @param {object} options
     * @returns {"cpu"|"gpu"}
     */
    selectDistanceBackend (options) {
        const {
            pointCount,
            requiresReadback = true,
            arithmeticIntensity = 1
        } = options;

        if (!this.ready || typeof pointCount !== 'number' || pointCount <= 0) {
            return 'cpu';
        }

        const adjustedThreshold = requiresReadback ?
            Math.ceil(this.minimumBatchSize / Math.max(1, arithmeticIntensity)) :
            Math.ceil((this.minimumBatchSize / 2) / Math.max(1, arithmeticIntensity));

        return pointCount >= adjustedThreshold ? 'gpu' : 'cpu';
    }

    /**
     * @param {object} options
     * @returns {"cpu"|"gpu"}
     */
    selectBackend (options) {
        switch (options.operation) {
        case 'distance-batch':
            return this.selectDistanceBackend(options);
        default:
            return 'cpu';
        }
    }

    /**
     * Batch calculate distances between multiple points and a target.
     * GPU execution is intentionally conservative until a real shader path exists.
     */
    calculateDistances (points, targetX, targetY) {
        const backend = this.selectDistanceBackend({
            pointCount: points.length,
            requiresReadback: true,
            arithmeticIntensity: 1
        });

        if (backend === 'cpu') {
            return points.map(p => {
                const dx = p.x - targetX;
                const dy = p.y - targetY;
                return Math.sqrt((dx * dx) + (dy * dy));
            });
        }

        // Placeholder until a real shader pipeline is wired in.
        return points.map(p => {
            const dx = p.x - targetX;
            const dy = p.y - targetY;
            return Math.sqrt((dx * dx) + (dy * dy));
        });
    }
}

module.exports = new GpuOptimizer();
