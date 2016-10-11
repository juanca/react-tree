const webpackConfig = require('./webpack.config');
Object.assign(webpackConfig, {
  entry: {},
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  devTool: 'inline-source-map',
});

module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],

    files: [
      'spec/body-cell.js',
      'spec/body-row-cells.js',
      'spec/body-row.js',
      'spec/body.js',
      'spec/grid.js',
      'spec/header-cell.js',
      'spec/header-row.js',
    ],

    frameworks: ['jasmine'],

    preprocessors: {
      'spec/body-cell.js': ['webpack'],
      'spec/body-row-cells.js': ['webpack'],
      'spec/body-row.js': ['webpack'],
      'spec/body.js': ['webpack'],
      'spec/grid.js': ['webpack'],
      'spec/header-cell.js': ['webpack'],
      'spec/header-row.js': ['webpack'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    }
  });
};
