'use strict'
const { resolve } = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: resolve(__dirname, 'src/entry.jsx'),
  output: {
    filename: 'entry.js',
    path: resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|jsx)$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
}
