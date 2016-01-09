// Karma configuration

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: './',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jspm', 'mocha', 'chai'],

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // list of files / patterns to load in the browser
    files: [],

    jspm: {
      // Edit this to your needs
      config: 'jspm.config.js',
      packages: 'www/jspm_packages',
      loadFiles: ['www/js/**/*.spec.js'], //, 'www/js/jspm_packages/es6-module-loader.js'],
      serveFiles: [
        'www/js/**/*.js',
        'www/js/**/*.html',
        'www/js/**/*.css'
      ],
      paths: {
        'js/*': 'base/www/js/*',
        'github:*': 'base/www/jspm_packages/github/*',
        'npm:*': 'base/www/jspm_packages/npm/*'
      },
      urlRoot: './'
    },

    proxies: {
      // '/jspm_packages': '/base/jspm_packages',
      '/www': '/base/www'
      // '/jspm.config.js': '/base/jspm.config.js'
    },

    // list of files to exclude
    exclude: [],

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

  });
};
