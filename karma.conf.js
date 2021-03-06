const webpackConfig = require('./webpack.config');

Object.assign(webpackConfig, {
  entry: {},
  externals: {
    cheerio: 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  devTool: 'inline-source-map',
});

module.exports = function karmaConfig(config) {
  config.set({
    browsers: ['PhantomJS'],

    files: [
      'spec/list/nested.jsx',
      'spec/list/recursive.jsx',
      'spec/list/simple.jsx',
      'spec/body-cell.jsx',
      'spec/body-row-cells.jsx',
      'spec/body-row.jsx',
      'spec/body.jsx',
      'spec/grid.jsx',
      'spec/header-cell.jsx',
      'spec/header-row.jsx',
    ],

    frameworks: ['jasmine'],

    preprocessors: {
      'spec/list/nested.jsx': ['webpack'],
      'spec/list/recursive.jsx': ['webpack'],
      'spec/list/simple.jsx': ['webpack'],
      'spec/body-cell.jsx': ['webpack'],
      'spec/body-row-cells.jsx': ['webpack'],
      'spec/body-row.jsx': ['webpack'],
      'spec/body.jsx': ['webpack'],
      'spec/grid.jsx': ['webpack'],
      'spec/header-cell.jsx': ['webpack'],
      'spec/header-row.jsx': ['webpack'],
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only',
    },
  });
};
