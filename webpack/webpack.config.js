var webpack = require('webpack');
var path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    'app': './js/main.js',
    'style': './scss/main.scss'
  },
  output: {
    path: path.dirname(__dirname) + '/assets/static/gen',
    filename: '[name].js'
  },
  devtool: '#cheap-module-source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.scss'],
  },
  module: {
    rules: [
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      },
      {
          test: /\.scss$/,
          use: [
              MiniCssExtractPlugin.loader,
              "css-loader",
              "sass-loader"
          ]
      },
      {
          test: /\.(woff2?|ttf|eot|svg|png|jpe?g|gif)$/,
          loader: 'file-loader'
      }
    ]
  },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: "[id].css"
        })
    ],
    optimization: {
        minimize: true,
    }
};
