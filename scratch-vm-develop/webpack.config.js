const CopyWebpackPlugin = require('copy-webpack-plugin');
const defaultsDeep = require('lodash.defaultsdeep');
const path = require('path');

const isBuild = process.env.npm_lifecycle_event === 'build';

class DuplicateAssetPlugin {
    constructor (from, to) {
        this.from = from;
        this.to = to;
    }

    apply (compiler) {
        compiler.hooks.emit.tap('DuplicateAssetPlugin', compilation => {
            const sourceAsset = compilation.assets[this.from];
            if (!sourceAsset) {
                return;
            }

            compilation.assets[this.to] = {
                source: () => sourceAsset.source(),
                size: () => sourceAsset.size()
            };

            const sourceMapAsset = compilation.assets[`${this.from}.map`];
            if (sourceMapAsset) {
                compilation.assets[`${this.to}.map`] = {
                    source: () => sourceMapAsset.source(),
                    size: () => sourceMapAsset.size()
                };
            }
        });
    }
}

const base = Object.assign({}, isBuild ? {
    parallelism: 20
} : {}, {
    mode: 'development',
    devServer: {
        contentBase: false,
        host: '0.0.0.0',
        port: process.env.PORT || 8073
    },
    devtool: isBuild ? false : 'cheap-module-source-map',
    output: {
        library: 'VirtualMachine',
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: path.resolve(__dirname, 'src'),
            query: {
                presets: [['@babel/preset-env']]
            }
        },
        {
            test: /\.mp3$/,
            loader: 'file-loader',
            options: {
                outputPath: 'media/music/'
            }
        }]
    },
    plugins: []
});

module.exports = [
    // Web-compatible
    defaultsDeep({}, base, {
        name: 'web',
        target: 'web',
        entry: {
            'scratch-vm': './src/index.js',
            'dist/compiler-worker': './src/compiler/compiler-worker.js'
        },
        output: {
            libraryTarget: 'umd',
            path: path.resolve('dist', 'web')
        },
        resolve: {
            alias: {
                '@turbowarp/scratch-svg-renderer$': path.resolve(
                    __dirname,
                    'node_modules/@turbowarp/scratch-svg-renderer/dist/web/scratch-svg-renderer.js'
                )
            }
        },
        module: {
            rules: base.module.rules.concat([
                {
                    test: require.resolve('./src/index.js'),
                    loader: 'expose-loader?VirtualMachine'
                }
            ])
        },
        plugins: base.plugins.concat([
            new DuplicateAssetPlugin('scratch-vm.js', 'scratch-vm.min.js')
        ])
    }),
    // Node-compatible
    defaultsDeep({}, base, {
        name: 'node',
        dependencies: ['web'],
        target: 'node',
        entry: {
            'scratch-vm': './src/index.js'
        },
        output: {
            libraryTarget: 'commonjs2',
            path: path.resolve('dist', 'node')
        },
        externals: {
            'decode-html': true,
            'format-message': true,
            'htmlparser2': true,
            'scratch-parser': true,
            'socket.io-client': true,
            'text-encoding': true
        }
    }),
    // Playground
    defaultsDeep({}, base, {
        name: 'playground',
        dependencies: ['node'],
        target: 'web',
        entry: {
            'benchmark': './src/playground/benchmark',
            'video-sensing-extension-debug': './src/extensions/scratch3_video_sensing/debug'
        },
        output: {
            path: path.resolve(__dirname, 'playground'),
            filename: '[name].js'
        },
        externals: {
            'scratch-render': 'ScratchRender',
            'scratch-storage': 'ScratchStorage',
            '@turbowarp/scratch-svg-renderer': 'ScratchSVGRenderer'
        },
        module: {
            rules: base.module.rules.concat([
                {
                    test: require.resolve('./src/index.js'),
                    loader: 'expose-loader?VirtualMachine'
                },
                {
                    test: require.resolve('./src/extensions/scratch3_video_sensing/debug.js'),
                    loader: 'expose-loader?Scratch3VideoSensingDebug'
                },
                {
                    test: require.resolve('stats.js/build/stats.min.js'),
                    loader: 'script-loader'
                },
                {
                    test: require.resolve('scratch-blocks/dist/vertical.js'),
                    loader: 'expose-loader?Blockly'
                },
                {
                    test: require.resolve('scratch-audio/src/index.js'),
                    loader: 'expose-loader?AudioEngine'
                }
            ])
        },
        performance: {
            hints: false
        },
        plugins: base.plugins.concat([
            new CopyWebpackPlugin([{
                from: 'node_modules/scratch-blocks/media',
                to: 'media'
            }, {
                from: 'node_modules/scratch-storage/dist/web'
            }, {
                from: 'node_modules/scratch-render/dist/web'
            }, {
                from: 'node_modules/@turbowarp/scratch-svg-renderer/dist/web'
            }, {
                from: 'test/fixtures/load-extensions/confirm-load/pen-simple-project.sb3',
                to: 'fixtures/pen-simple-project.sb3'
            }, {
                from: 'test/fixtures/load-extensions/confirm-load/pen-dolphin-3d.sb3',
                to: 'fixtures/pen-dolphin-3d.sb3'
            }, {
                from: 'src/playground'
            }])
        ])
    })
];
