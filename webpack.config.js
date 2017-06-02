'use strict';

const Path = require('path');
const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const targetPathRel = 'docs';
const targetPathAbs = Path.resolve(__dirname, targetPathRel);

module.exports = {
  context: Path.resolve(__dirname, 'src'),
  entry: ['./index.js'],
  output: {
    filename: 'bundle.js',
    path: targetPathAbs,
    //publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}
