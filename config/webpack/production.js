// Note: You must restart bin/webpack-watcher for changes to take effect

var webpack = require('webpack')
var merge   = require('webpack-merge')

var sharedConfig = require('./shared.js')

module.exports = merge(sharedConfig.config, {
  output: { filename: '[name]-[chunkhash].js' },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
})
