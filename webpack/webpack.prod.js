const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');

const prod = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../lib/'),
    filename: '[name].js',
  },
});

module.exports = prod;