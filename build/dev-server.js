var path = require('path');
var Webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./examples.dev.config");

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var compiler = Webpack(webpackConfig);
var server = new WebpackDevServer(compiler, {
  contentBase: resolve('examples'),
  port: 9095,
  hot: true,
  disableHostCheck: true,
  stats: {
    colors: true
  }
});

server.listen(9095, "127.0.0.1", function() {
  console.log("Starting server on http://localhost:9095");
});

