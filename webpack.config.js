var path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'VuePulldownPullup',
    libraryTarget: 'umd',
    filename: 'vue-pulldown-pullup.js',
    path: resolve('dist'),
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('src'), resolve('example')],
        options: {
          loaders: {
            js: 'babel!eslint'
          }
        },
      },
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('example')],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=es2015',
        include: [resolve('src'), resolve('example')],
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
        include: [resolve('src'), resolve('example')],
      },
    ],
  },
};
