import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from './webpack.server.config';
import crypto from 'crypto';
import { createStore, combineReducers } from 'redux';
import { allCombined } from './app/reducers/root-reducer';

let store = createStore(allCombined);

var express = require('express');
var bodyParser = require('body-parser').json();
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(
  compiler,
  {
    noInfo: true,
    path: webpackConfig.output.path,
    publicPath: webpackConfig.output.publicPath
  }
));
app.use(webpackHotMiddleware(compiler))
app.use('/static', express.static('dist'))
app.get('*', (req, res) => { res.sendFile(webpackConfig.output.path + '/index.html'); })

io.on('connection', (socket) => {
	socket.emit('initial state', store.getState())

	// all global broadcasting messages, client input bus
	socket.on('action', (action) => {
		console.log()
		console.log("ACTION")
		console.log(action)

		// save in server store
		store.dispatch(action)

		// broadcast to all listeners
		socket.broadcast.emit("action", action)

		console.log()
		console.log("SERVERSIDE STORE STATE:")
	 	console.log(store.getState())
	});

	// todo: after disconnect should purge all data about user
	socket.on('disconnect', () => {
		// console.log('user disconnected purge all data')
	})

});

server.listen(8080, function () {
  console.log('Listening on port 8080!');
});
