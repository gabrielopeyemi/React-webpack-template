const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    hot: true,
    open: true,
    port: 3000,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('start'),
    }),
  ],
}
