// @ts-check

/**
 * @fileoverview Manages a pool of compiler workers.
 */

const {compileTask} = require('./compile-task');

const getBundleScriptURL = () => {
    if (typeof document === 'undefined') {
        return null;
    }

    if (document.currentScript && document.currentScript.src) {
        return document.currentScript.src;
    }

    const scripts = document.getElementsByTagName('script');
    const lastScript = scripts[scripts.length - 1];
    if (lastScript && lastScript.src) {
        return lastScript.src;
    }

    return null;
};

const getCompilerWorkerURL = () => {
    const bundleScriptURL = getBundleScriptURL();
    if (bundleScriptURL) {
        return new URL('dist/compiler-worker.js', bundleScriptURL).toString();
    }

    if (typeof location !== 'undefined' && location.href) {
        return new URL('dist/compiler-worker.js', location.href).toString();
    }

    return null;
};

class CompilerWorkerProxy {
    constructor () {
        this.workers = [];
        this.idleWorkers = [];
        this.queue = [];
        this.compilerWorkerURL = getCompilerWorkerURL();
        this.canUseWorkers = Boolean(
            typeof Worker === 'function' &&
            typeof navigator !== 'undefined' &&
            typeof Promise === 'function' &&
            this.compilerWorkerURL
        );

        if (!this.canUseWorkers) {
            return;
        }

        this.workerCount = Math.min(4, navigator.hardwareConcurrency || 2);

        try {
            for (let i = 0; i < this.workerCount; i++) {
                const worker = new Worker(this.compilerWorkerURL);
                this.workers.push(worker);
                this.idleWorkers.push(worker);
            }
        } catch (e) {
            this.workers = [];
            this.idleWorkers = [];
            this.canUseWorkers = false;
        }
    }

    /**
     * @param {Object} data
     * @returns {Promise<Object>}
     */
    compile (data) {
        return this._dispatch(data);
    }

    /**
     * @param {Array<Object>} tasks
     * @returns {Promise<Array<Object>>}
     */
    compileTasks (tasks) {
        return this._dispatch({tasks});
    }

    /**
     * @param {Object} payload
     * @returns {Promise<Object>|Promise<Array<Object>>}
     */
    _dispatch (payload) {
        if (!this.canUseWorkers) {
            return Promise.resolve().then(() => {
                if (Array.isArray(payload.tasks)) {
                    return payload.tasks.map(task => compileTask(task));
                }
                return compileTask(payload);
            });
        }

        return new Promise((resolve, reject) => {
            this.queue.push({payload, resolve, reject});
            this.processQueue();
        });
    }

    processQueue () {
        if (this.queue.length === 0 || this.idleWorkers.length === 0) {
            return;
        }

        const {payload, resolve, reject} = this.queue.shift();
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
        worker.postMessage(payload);
    }
}

module.exports = new CompilerWorkerProxy();
