const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  watch: false,
  entry: './src/assets/js/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js'
  }
}
