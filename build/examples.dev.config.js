var path = require('path');
var merge = require('webpack-merge');
var baseConfig = require('./base.config');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseConfig ,{
  entry: resolve('examples/main.js'),
  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  }
});
