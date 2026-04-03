const {test} = require('tap');
const fs = require('fs');
const path = require('path');
const webpackConfig = require('../../webpack.config');

test('web webpack config keeps compiler-worker as a generated asset', t => {
    const webConfig = webpackConfig.find(config => config.name === 'web');

    t.ok(webConfig, 'web webpack config is present');
    t.equal(webConfig.output.globalObject, 'self');
    t.equal(
        webConfig.entry['dist/compiler-worker'],
        './src/compiler/compiler-worker.js'
    );
    t.end();
});

test('compiler worker proxy points at dist/compiler-worker.js', t => {
    const proxyPath = path.resolve(__dirname, '../../src/compiler/compiler-worker-proxy.js');
    const proxySource = fs.readFileSync(proxyPath, 'utf8');

    t.match(proxySource, /new URL\('dist\/compiler-worker\.js'/);
    t.match(proxySource, /new Worker\(this\.compilerWorkerURL\)/);
    t.end();
});

test('playground build copies compiler-worker next to benchmark.js', t => {
    const webpackConfigPath = path.resolve(__dirname, '../../webpack.config.js');
    const webpackConfigSource = fs.readFileSync(webpackConfigPath, 'utf8');

    t.match(webpackConfigSource, /from: 'dist\/web\/dist\/compiler-worker\.js'/);
    t.match(webpackConfigSource, /to: 'dist\/compiler-worker\.js'/);
    t.end();
});
