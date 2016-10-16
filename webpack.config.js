module.exports = {
  entry: './react-tree-entry.js',

  externals: {
    react: 'React',
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: { presets: ['es2015'] },
    }, {
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: { presets: ['es2015', 'react'] },
    }],
  },

  output: {
    path: __dirname,
    filename: 'react-tree.js',
    libraryTarget: 'this',
    library: 'ReactTree',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
