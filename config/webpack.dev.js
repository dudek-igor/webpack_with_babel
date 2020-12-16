const webpackCommon = require('./webpack.common');
const path = require('path');
// const webpack = require('webpack');

module.exports = {
  ...webpackCommon,
  mode: 'development',
  target: 'web',
  devtool: 'inline-source-map',
  devServer: {
    open: true,
    port: 5000,
    host: 'localhost',
    contentBase: path.resolve(__dirname, '../', 'dist'),
    // if we use HMR we don't have liveReload *.html files
    // hot: true,
    watchContentBase: true,
    // compress: true,
  },
  plugins: [
    ...webpackCommon.plugins,
    // new webpack.HotModuleReplacementPlugin()
  ],
};
