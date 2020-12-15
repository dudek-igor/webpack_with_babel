const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../', 'src', 'index.js'),
  output: {
    filename: 'js/[name]-[chunkhash].bundle.js',
    path: path.resolve(__dirname, '../', 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            // plugins:
          },
        },
      },
    ],
  },
  plugins: [],
};
