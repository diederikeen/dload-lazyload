const common = require('./webpack.common');
const merge = require('webpack-merge');


const dev = merge(common, {
  mode: 'development',
  watch: true,
});

module.exports = dev;