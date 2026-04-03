// @ts-check

/**
 * @fileoverview Manages a pool of compiler workers.
 */

const {compileTask} = require('./compile-task');

let CompilerWorker = null;
try {
    CompilerWorker = require('worker-loader?name=dist/compiler-worker.js!./compiler-worker');
} catch (e) {
    CompilerWorker = null;
}

class CompilerWorkerProxy {
    constructor () {
        this.workers = [];
        this.idleWorkers = [];
        this.queue = [];
        this.canUseWorkers = Boolean(
            CompilerWorker &&
            typeof navigator !== 'undefined' &&
            typeof Promise === 'function'
        );

        if (!this.canUseWorkers) {
            return;
        }

        this.workerCount = Math.min(4, navigator.hardwareConcurrency || 2);

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
        if (!this.canUseWorkers) {
            return Promise.resolve().then(() => compileTask(data));
        }

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
        const proxy = this;
        const listeners = {};
        const releaseWorker = () => {
            worker.removeEventListener('message', listeners.message);
            worker.removeEventListener('error', listeners.error);
            proxy.idleWorkers.push(worker);
            proxy.processQueue();
        };

        listeners.message = event => {
            releaseWorker();
            if (event.data.success) {
                resolve(event.data.result);
            } else {
                reject(new Error(event.data.error));
            }
        };

        listeners.error = error => {
            releaseWorker();
            reject(error);
        };

        worker.addEventListener('message', listeners.message);
        worker.addEventListener('error', listeners.error);
        worker.postMessage(data);
    }
}

module.exports = new CompilerWorkerProxy();
