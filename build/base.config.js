'use strict';

var webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
var resolve = require('./');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'examples': resolve('examples')
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter')
            }
          }
        ],
        enforce: 'pre',
        include: [resolve('src'), resolve('examples'), resolve('test')],
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
        include: [resolve('src'), resolve('examples'), resolve('test')],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: [resolve('src'), resolve('examples'), resolve('test')],
      },
      {
        test: /\.css|.less$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
          'less-loader'
        ],
        include: [resolve('src'), resolve('examples')],
      }
    ]
  }
};
