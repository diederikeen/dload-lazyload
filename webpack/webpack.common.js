const path = require('path');

const common = {
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../lib/'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      },
    ],
  }
}

module.export = common;