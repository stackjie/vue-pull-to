'use strict';

var merge = require('webpack-merge');
var baseConfig = require('./base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var resolve = require('./');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: resolve('examples/main.js'),
  output: {
    filename: '[name]-[chunkhash].js',
    path: resolve('examples/dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './examples/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            drop_debugger: true
          }
        }
      })
    ]
  }
});
