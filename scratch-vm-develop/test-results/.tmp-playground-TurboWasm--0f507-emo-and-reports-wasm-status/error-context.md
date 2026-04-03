# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: .tmp-playground.spec.js >> TurboWasm playground loads bundled Pen demo and reports wasm status
- Location: .tmp-playground.spec.js:3:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).not.toContainText(expected) failed

Locator: locator('#compile-status')
Expected substring: not "No compilations observed yet"
Received string: "No compilations observed yet"

Call log:
  - Expect "not toContainText" with timeout 120000ms
  - waiting for locator('#compile-status')
    32 × locator resolved to <strong id="compile-status">No compilations observed yet</strong>
       - unexpected value "No compilations observed yet"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - generic [ref=e4]:
      - paragraph [ref=e5]: TurboWasm Playground
      - heading "WebAssembly-first Scratch execution with a live Pen demo." [level=1] [ref=e6]
      - paragraph [ref=e7]: This page boots the TurboWasm VM, prefers the WASM compiler path, loads a bundled Pen project, and exposes runtime progress, compile status, and a synthetic kernel benchmark.
    - generic [ref=e8]:
      - button "Load Pen Demo" [ref=e9] [cursor=pointer]
      - button "Load Heavy Pen Demo" [ref=e10] [cursor=pointer]
      - button "Import sb3" [ref=e11] [cursor=pointer]
  - main [ref=e12]:
    - generic [ref=e13]:
      - generic [ref=e14]:
        - article [ref=e15]:
          - generic [ref=e16]: Runtime
          - strong [ref=e17]: Running
        - article [ref=e18]:
          - generic [ref=e19]: Compiler
          - strong [ref=e20]: Compiler on / WASM preferred
        - article [ref=e21]:
          - generic [ref=e22]: WASM Support
          - strong [ref=e23]: WebAssembly available
        - article [ref=e24]:
          - generic [ref=e25]: Asset Progress
          - strong [ref=e26]: 5 / 5 assets loaded
        - article [ref=e27]:
          - generic [ref=e28]: Compile Status
          - strong [ref=e29]: No compilations observed yet
        - article [ref=e30]:
          - generic [ref=e31]: Pen
          - strong [ref=e32]: Pen ready via renderer=yes
        - article [ref=e33]:
          - generic [ref=e34]: Project
          - strong [ref=e35]: Pen Simple (Stage)
        - article [ref=e36]:
          - generic [ref=e37]: Targets
          - strong [ref=e38]: Sprite1
        - article [ref=e39]:
          - generic [ref=e40]: Threads
          - strong [ref=e41]: 0 active runtime threads
        - article [ref=e42]:
          - generic [ref=e43]: FPS
          - strong [ref=e44]: 60 fps
      - generic [ref=e45]:
        - button "Run Project" [ref=e46] [cursor=pointer]
        - button "Stop Project" [ref=e47] [cursor=pointer]
        - button "Run Kernel Benchmark" [ref=e48] [cursor=pointer]
      - article [ref=e49]:
        - generic [ref=e50]: Demo Notes
        - paragraph [ref=e51]: Bundled local demo focused on Pen startup correctness.
      - article [ref=e52]:
        - generic [ref=e53]: Kernel Benchmark
        - paragraph [ref=e54]: No benchmark executed yet.
        - paragraph [ref=e55]: Use the benchmark button to compare the current JS and WASM numeric paths.
      - article [ref=e56]:
        - generic [ref=e57]: Event Log
        - generic [ref=e58]: "[12:51:59 PM] Project running: Pen Simple [12:51:59 PM] Loading project: Pen Simple [12:51:59 PM] Fetching bundled demo: Pen Simple [12:51:59 PM] TurboWasm playground booted"
    - paragraph [ref=e62]: Pen drawing continues to use the renderer pipeline, so GPU-backed canvas/WebGL work stays in the render path while numeric kernels can shift to WASM when supported.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | 
  3  | test('TurboWasm playground loads bundled Pen demo and reports wasm status', async ({ page }) => {
  4  |   const consoleErrors = [];
  5  |   page.on('pageerror', error => consoleErrors.push('pageerror:' + error.message));
  6  |   page.on('console', msg => {
  7  |     if (msg.type() === 'error') {
  8  |       consoleErrors.push('console:' + msg.text());
  9  |     }
  10 |   });
  11 | 
  12 |   await page.goto('http://127.0.0.1:4173/index.html', { waitUntil: 'domcontentloaded', timeout: 120000 });
  13 |   await expect(page.locator('h1')).toContainText('WebAssembly-first Scratch execution');
  14 |   await expect(page.locator('#project-status')).not.toHaveText('No project loaded', { timeout: 120000 });
  15 |   await expect(page.locator('#pen-status')).toContainText('Pen ready', { timeout: 120000 });
> 16 |   await expect(page.locator('#compile-status')).not.toContainText('No compilations observed yet', { timeout: 120000 });
     |                                                     ^ Error: expect(locator).not.toContainText(expected) failed
  17 |   await expect(page.locator('#runtime-state')).toHaveText(/Running|Project start/, { timeout: 120000 });
  18 | 
  19 |   const compileStatus = (await page.locator('#compile-status').textContent()).trim();
  20 |   const runtimeState = (await page.locator('#runtime-state').textContent()).trim();
  21 |   const projectStatus = (await page.locator('#project-status').textContent()).trim();
  22 |   const penStatus = (await page.locator('#pen-status').textContent()).trim();
  23 |   const logText = (await page.locator('#event-log').textContent()).trim();
  24 | 
  25 |   console.log('runtime=' + runtimeState);
  26 |   console.log('project=' + projectStatus);
  27 |   console.log('pen=' + penStatus);
  28 |   console.log('compile=' + compileStatus);
  29 |   console.log('log=' + logText.replace(/\n/g, ' | '));
  30 | 
  31 |   expect(consoleErrors, consoleErrors.join('\n')).toEqual([]);
  32 | });
  33 | 
```