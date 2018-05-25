var webpackConfig = require('./webpack.dev');

webpackConfig.module.rules = [{
    test: /\.ts$/,
    exclude: /node_modules/,
    loader: "awesome-typescript-loader",
    query: {
            esModules: true,
            compilerOptions: {
                inlineSourceMap: true,
                sourceMap: false
            }
        }
    },
    {
        test: /\.ts$/,
        enforce: "post",
        loader: 'istanbul-instrumenter-loader',
        exclude: [
            'node_modules',
            /\.spec\.ts$/,
            /\.test\.ts$/
        ]
    }
];

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon'],
        files: [
            'tests/**/*.ts'
        ],
        exclude: [],
        preprocessors: {
            'tests/**/*.ts': ['webpack']
        },
        webpack: {
            devtool: 'inline-source-map',
            module: webpackConfig.module,
            resolve: webpackConfig.resolve
        },
        webpackServer: {
            noInfo: true
        },
        coverageReporter: {
            dir: 'coverage',
            reporters: [
                {
                    type: 'html',
                    subdir: 'report-html'
                }
            ]
        },
        reporters: ['progress', 'coverage'],
        port: 9000,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        concurrency: Infinity
    })
}