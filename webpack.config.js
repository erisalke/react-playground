var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'html/index.html',
  inject: 'body'
});

module.exports = {
    entry: "./app/app.js",
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: __dirname + '/app',
          loader: 'babel'
        }
      ]
    },
    output: {
      filename: "js/bundle.js",
      path: __dirname + '/public'
    },
    plugins: [HTMLWebpackPluginConfig]
  };
