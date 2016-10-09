module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],

    files: [
      'spec/hello-world.js',
    ],

    frameworks: ['jasmine'],

    preprocessors: {
      'spec/hello-world.js': ['webpack'],
    },

    webpack: {},

    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
