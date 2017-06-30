var path = require('path');
var webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: './src/index.js',
  output: {
    library: 'VueEnhancedScroll',
    libraryTarget: 'umd',
    filename: 'vue-enhanced-scroll.js',
    path: resolve('dist')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'examples': resolve('examples')
    }
  },
  module: {
    loaders: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        include: [resolve('src'), resolve('examples')],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('src'), resolve('examples')],
        options: {
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('examples')],
      },
      {
        test: /\.css|.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader',
        include: [resolve('src'), resolve('examples')],
      }
    ]
  }
};
