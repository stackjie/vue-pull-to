'use strict';

var merge = require('webpack-merge');
var baseConfig = require('./base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var resolve = require('./');

module.exports = merge(baseConfig, {
  mode: 'development',
  entry: resolve('examples/main.js'),
  output: {
    filename: 'main.js'
  },
  devServer: {
    contentBase: '/assets/',
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    stats: {
      colors: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './examples/index.html',
      inject: true
    })
  ]
});
