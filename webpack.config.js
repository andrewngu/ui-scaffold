const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve('src'),
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'babel-polyfill',
    'isomorphic-fetch',
    '../styles/main.scss',
    './index.jsx',
  ],
  output: {
    filename: 'js/[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'css-hot-loader' },
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer({ browsers: ['> 1%', 'IE >= 10'] })],
            },
          },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({ template: '../public/index.html' }),
    new webpack.IgnorePlugin(/\.svg$/),
  ],
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: '8080',
  },
};
