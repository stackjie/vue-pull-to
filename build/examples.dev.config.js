var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('./base.config');
var HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseConfig ,{
  entry: resolve('examples/main.js'),
  output: {
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './examples/index.html',
      inject: true
    })
  ]
});
