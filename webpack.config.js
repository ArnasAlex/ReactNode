var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './client/main.jsx',
  output: { path: './client/dist', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  },
  devtool: "source-map"
};