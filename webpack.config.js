const path = require('path');

module.exports = {
  mode: 'development',
  watch: true,
  entry: './src/assets/js/index.js',
  output: {
    path: path.resolve(__dirname, 'dist/assets/js'),
    filename: 'app.js'
  }
}
