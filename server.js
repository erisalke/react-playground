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

    socket.join(roomId)
    socket.room = roomId;
    socket.emit('update chat', 'welcome in room ' + roomId)
    socket.broadcast.to(socket.room).emit('update chat', 'user X entered room ' + roomId)
  });

  socket.on('user leaves room', (roomId) => {
    console.log("user left room:", roomId)

    socket.leave(socket.room)
    socket.broadcast.to(socket.room).emit('update chat', 'user X left the room')
    socket.room = ''
  });

  socket.on('disconnect', function(){
    console.log("disconnect")

		socket.broadcast.to(socket.room).emit('update chat', 'user X left the room via disconnection')
		socket.leave(socket.room);
	});
});

server.listen(3001, function () {
  console.log('Listening on port 3001!');
});
