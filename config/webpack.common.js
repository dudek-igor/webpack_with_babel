const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../', 'index.js'),
  output: {
    filename: 'js/[name]-[chunkhash].bundle.js',
    path: path.resolve(__dirname, '../', 'dist'),
  },
};
