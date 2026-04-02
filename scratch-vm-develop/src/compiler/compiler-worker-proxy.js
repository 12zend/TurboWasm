// @ts-check

/**
 * @fileoverview Manages a pool of compiler workers.
 */

// We use inline worker-loader here for convenience
const CompilerWorker = require('worker-loader?name=dist/compiler-worker.js!./compiler-worker');

class CompilerWorkerProxy {
    constructor () {
        this.workerCount = Math.min(4, navigator.hardwareConcurrency || 2);
        this.workers = [];
        this.idleWorkers = [];
        this.queue = [];

        for (let i = 0; i < this.workerCount; i++) {
            const worker = new CompilerWorker();
            this.workers.push(worker);
            this.idleWorkers.push(worker);
        }
    }

    /**
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    compile (data) {
        return new Promise((resolve, reject) => {
            this.queue.push({data, resolve, reject});
            this.processQueue();
        });
    }

    processQueue () {
        if (this.queue.length === 0 || this.idleWorkers.length === 0) {
            return;
        }

        const {data, resolve, reject} = this.queue.shift();
        const worker = this.idleWorkers.shift();

        const onMessage = (event) => {
            worker.removeEventListener('message', onMessage);
            worker.removeEventListener('error', onError);
            this.idleWorkers.push(worker);
            this.processQueue();
            
            if (event.data.success) {
                resolve(event.data);
            } else {
                reject(new Error(event.data.error));
            }
        };

        const onError = (error) => {
            worker.removeEventListener('message', onMessage);
            worker.removeEventListener('error', onError);
            // Worker is likely broken, recreate it?
            // For now just put it back
            this.idleWorkers.push(worker);
            this.processQueue();
            reject(error);
        };

        worker.addEventListener('message', onMessage);
        worker.addEventListener('error', onError);
        worker.postMessage(data);
    }
}

module.exports = new CompilerWorkerProxy();
