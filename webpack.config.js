const webpack = require('webpack')
const slsw = require('serverless-webpack')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  mode: 'development',
  externals: [
    /aws-sdk/
  ],
  devtool: 'source-map',
  optimization: {
    minimize: false
  },
  // plugins: [
  //   new webpack.LoaderOptionsPlugin({
  //     minimize: true,
  //     debug: false
  //   }),
  //   new webpack.optimize.ModuleConcatenationPlugin(),
  //   new UglifyJsPlugin({
  //     cache: true,
  //     parallel: true,
  //     uglifyOptions: {
  //       compress: false,
  //       ecma: 6,
  //       mangle: true
  //     },
  //     sourceMap: true
  //   })
  // ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/, /test/]
      }
    ]
  }
}
