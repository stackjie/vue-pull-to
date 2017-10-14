var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('./base.config');
var webpack = require('webpack');
var del = require('del');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

del.sync('./dist/*');

module.exports = merge(baseConfig, {
  entry: './src/index.js',
  output: {
    library: 'VuePullTo',
    libraryTarget: 'umd',
    filename: 'vue-pull-to.js',
    path: resolve('dist')
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]
});
