var path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'vue-pulldown-pullup',
    libraryTarget: 'umd',
    filename: 'vue-pulldown-pullup.js',
    path: resolve('dist'),
  },
  module: {
    loaders: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader?presets[]=es2015',
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel!eslint'
          }
        },
      },
    ]
  },
};
