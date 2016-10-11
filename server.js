import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.server.config';
import crypto from 'crypto';

var express = require('express');
var bodyParser = require('body-parser').json();
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var db = { rooms: [{"id":1, "name":"default room"}] }

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(
  compiler,
  {
    noInfo: false,
    path: webpackConfig.output.path,
    publicPath: webpackConfig.output.publicPath
  }
))
app.use(webpackHotMiddleware(compiler))

app.use('/static', express.static('dist'))


// *****************
// * web api       *
// *****************
// app.get('/api/rooms', function (req, res) {
//   console.log(db.rooms)
//   res.json(db.rooms);
// });

app.post('/api/rooms', bodyParser, function (req, res) {
  var room = {
    name: req.body.name,
    id: crypto.randomBytes('20').toString('hex')
  }
  db.rooms.push(room);
  res.json(room);
});

app.get('*', (req, res) => { res.sendFile(webpackConfig.output.path + '/index.html'); })


// *****************
// * sockets api   *
// *****************
import * as types from './app/api/websockets-action-types'

io.on('connection', function (socket) {
  socket.emit(types.ALL_ROOMS, db.rooms);

  socket.on(types.CREATE_ROOM, function (data) {
    var room = {
      name: data.name,
      id: crypto.randomBytes(20).toString('hex')
    }
    db.rooms.push(room)
    socket.emit(types.NEW_ROOM, room)
    socket.broadcast.emit(types.NEW_ROOM, room)
  });

  socket.on('chat', function (data) {
    event = data.event

    socket.emit('chat_messages', data)
    socket.broadcast.emit('chat_messages', data)
  });
});

server.listen(3001, function () {
  console.log('Listening on port 3001!');
});
