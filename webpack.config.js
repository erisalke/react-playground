var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/index.html',
  filename: './index.html',
  inject: 'body'
});
var webpack = require('webpack')

module.exports = {
    entry: "./app/index.js",
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: [__dirname+'/node_modules'],
          loader: 'babel'
        },
        { test: /\.css$/, loader: "style-loader!css-loader" }
      ]
    },
    output: {
      filename: "bundle.js",
      path: __dirname + '/dist',
      publicPath: '/static/'
    },
    plugins: process.env.NODE_ENV === 'production' ? [
      HTMLWebpackPluginConfig,
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin()
    ] : [HTMLWebpackPluginConfig],
  };
