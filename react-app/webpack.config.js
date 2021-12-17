'use strict'
const { resolve } = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: resolve(__dirname, 'src/entry.tsx'),
  output: {
    filename: 'entry.js',
    path: resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|jsx)$/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
}
