// Karma configuration
// Generated on Tue Sep 16 2014 09:05:25 GMT-0700 (PDT)
var webpackConfig = require('./webpack.config');
webpackConfig.resolve = {
    root: [
        __dirname + '/node_modules',
        __dirname + '/test/unit'
    ],
    alias: {
        root: __dirname
    },
    extensions: ['', '.js', '.jsx']
};
webpackConfig.watch = true;
webpackConfig.devtool = 'inline-source-map';
webpackConfig.module.postLoaders = [{
  test: /\.jsx?$/,
  exclude: /(test|node_modules)\//,
  loader: 'istanbul-instrumenter'
}];

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai-sinon', 'sinon'],


    // list of files / patterns to load in the browser
    files: [
      'phantom-polyfills.js',
      'karma-shims.js',
      'test/unit/index.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/unit/index.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,
    webpackServer: { noInfo: true },

    client: {
        mocha: {
            globals: ['FB']
        }
    },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'junit', 'coverage'],
    coverageReporter: {
        type: 'html',
        dir: "coverage",
        subdir: '.',
        file: 'cobertura.xml'
    },

    junitReporter: {
      outputFile: 'test-results.xml',
      suite: ''
    },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],

    // webpack means that PhantomJS sometimes does not respond in time
    browserNoActivityTimeout: 120000,

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
