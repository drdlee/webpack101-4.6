const path = require('path');
const HTMLwp = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hasil.bundle.js'
  },
  module: {
    rules: [
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
    ]
  },
  plugins: [
    new HTMLwp({
      title: 'Lalalalnd',
      template: './src/my-index.html',
      minify: { collapseWhitespace: true }
    })
  ]
};
