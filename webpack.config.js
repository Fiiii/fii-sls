const webpack = require('webpack')
const slsw = require('serverless-webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  externals: [
    /aws-sdk/
  ],
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new UglifyJsPlugin({
      compress: true,
      mangle: process.env.NODE_ENV === 'production',
      beautify: process.env.NODE_ENV !== 'production',
      output: {
        comments: process.env.NODE_ENV !== 'production'
      },
      sourceMap: false
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /test/],
        loader: 'babel-loader',
        query: {
          presets: [
            [
              'env',
              {
                target: { node: 8.10 }, // Node version on AWS Lambda
                useBuiltIns: true,
                modules: false,
                loose: true
              }
            ]
          ]
        }
      }
    ]
  }
}
