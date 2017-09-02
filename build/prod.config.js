var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('./base.config');
var webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseConfig, {
  entry: resolve('src/index.js'),
  output: {
    library: 'VuePullTo',
    libraryTarget: 'umd',
    filename: 'vue-pull-to.js',
    path: resolve('dist')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      }
    })
  ],
});
