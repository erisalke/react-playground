
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
    }
};
