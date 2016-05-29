var webpack = require('webpack');

module.exports = {
  entry: {
    dist: './react-tree-entry.js',
  },
  externals: {
    'react': 'React'
  },
  output: {
    path: __dirname,
    filename: 'react-tree.js',
    libraryTarget: 'this',
    library: 'ReactTree'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'React': 'react'
    }),
  ]
};
