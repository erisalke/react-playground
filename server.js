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

var db = { rooms: [] }

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(
  compiler,
  {
    noInfo: true,
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
io.sockets.on('connection', function (socket) {
  // on connection send to client list of all rooms
  socket.on('get all rooms', () => {
    console.log("get all rooms")
    socket.emit('all rooms', db.rooms)
  })

  socket.on('createroom', function (data) {
    console.log("create room ")
    var room = {
      name: data.name,
      id: crypto.randomBytes(20).toString('hex')
    }
    db.rooms.push(room)
    socket.emit('newroom', room)
    socket.broadcast.emit('newroom', room)
  });

  socket.on('user enters room', function(roomId) {
    console.log("user entered room:", roomId)
// console.log(socket)
    socket.join(roomId)
    socket.room = roomId;
    socket.emit('update chat', 'welcome in room ' + roomId, 'SERVER')
    socket.broadcast.to(socket.room).emit('update chat', 'user '+socket.username+' joined the room', 'SERVER')
  });

  socket.on('set user name', function(name) {
    console.log("set user name:", name)
    socket.username = name;
  });

  socket.on('user leaves room', (roomId) => {
    console.log("user left room:", roomId)

    socket.leave(socket.room)
    socket.broadcast.to(socket.room).emit('update chat', 'user '+socket.username+' left the room', 'SERVER')
    socket.room = ''
  });

  socket.on('new chat message', (payload) => {
    console.log("new chat message:", payload.msg)

    socket.broadcast.to(socket.room).emit('update chat', payload.msg, payload.user)
  });

  socket.on('tile selected', (payload) => {
    console.log("tile selected:", payload)

    socket.broadcast.to(socket.room).emit('opponent position selected', payload.pos)
    // socket.emit('opponent position selected', payload.pos)
  });

  socket.on('disconnect', function(){
    console.log("disconnect")

		socket.broadcast.to(socket.room).emit('update chat', 'user '+socket.username+' disconnected', 'SERVER')
		socket.leave(socket.room);
	});
});

server.listen(3001, function () {
  console.log('Listening on port 3001!');
});
