const path = require('path');

module.exports = {
  mode: 'production',
  watch: false,
  entry: './src/assets/js/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname),
    filename: './index.js'
  }
}
