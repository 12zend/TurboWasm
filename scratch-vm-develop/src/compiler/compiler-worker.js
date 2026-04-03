// @ts-check

const {compileTask} = require('./compile-task');

/**
 * @fileoverview Web Worker for Scratch compilation.
 */
self.onmessage = event => {
    try {
        const result = compileTask(event.data);
        self.postMessage({
            success: true,
            result
        });
    } catch (e) {
        self.postMessage({success: false, error: e.stack});
    }
};
