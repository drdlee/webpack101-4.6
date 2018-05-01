const path = require('path');
const HTMLwp = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hasil.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new HTMLwp({
      title: 'Lalalalnd',
      template: './src/my-index.html'
      // minify: { collapseWhitespace: true }
    }),
    new ExtractTextPlugin({
      filename: 'index.css'
    })
  ]
};
