var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('./base.config');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseConfig, {
  entry: resolve('src/index.js'),
  output: {
    library: 'VueEnhancedScroll',
    libraryTarget: 'umd',
    filename: 'vue-enhanced-scroll.js',
    path: resolve('dist')
  }
});
