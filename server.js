import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.server.config';

var express = require('express');
var bodyParser = require('body-parser').json();

var app = express();
var db = { rooms: [{"name":"super pokoj"},{"name":"default2"}] }

//app.use(express.static('public'));

const compiler = webpack(webpackConfig)
console.log(webpackConfig.output.publicPath)
app.use(webpackDevMiddleware(
  compiler,
  {
    noInfo: false,
    path: webpackConfig.output.path,
    publicPath: webpackConfig.output.publicPath
  }
))
app.use(webpackHotMiddleware(compiler))

app.get('/', (req, res) => {
  res.sendFile(webpackConfig.output.path + '/index.html');
})
app.get('/api/rooms', function (req, res) {
  console,
  res.json(db.rooms);
});

app.post('/api/rooms', bodyParser, function (req, res) {
  var room = {
    name: req.body.name
  }
  db.rooms.push(room);
  res.json(room);
});


app.listen(3001, function () {
  console.log('Listening on port 3001!');
});
