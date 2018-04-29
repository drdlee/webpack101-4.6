const path = require('path');
const HTMLwp = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'hasil.bundle.js'
  },
  plugins: [
    new HTMLwp({
      title: 'Lalalalnd',
      template: './src/my-index.html',
      minify: { collapseWhitespace: true }
    })
  ]
};
