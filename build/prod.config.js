'use strict';

var merge = require('webpack-merge');
var baseConfig = require('./base.config');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var resolve = require('./');

var ENTRY = './src/index.js';
module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    'vue-pull-to': ENTRY,
    'vue-pull-to.min': ENTRY
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.SourceMapDevToolPlugin({
      filename: '[name].js.map',
      append: '\n//# sourceMappingURL=[url]\n',
      include: /\.min\.js$/,
    }),
  ],
  output: {
    library: 'VuePullTo',
    libraryTarget: 'umd',
    filename: '[name].js',
    path: resolve('dist')
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        sourceMap: true,
        include: /\.min\.js$/
      })
    ]
  }
});
