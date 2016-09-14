var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/app/index.html',
  filename: 'html/index.html',
  inject: 'body'
});

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
      filename: "js/bundle.js",
      path: __dirname + '/public'
    },
    plugins: [HTMLWebpackPluginConfig]
  };
