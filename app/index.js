import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import router from './router';
import store from './store';
import io from 'socket.io-client';

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);

const initSocket = () => {
  var socket = io.connect('http://localhost:3001', {reconnect:true})
  socket.on('news', function (data) {
    console.log("client", data);
    socket.emit('my other event', { my: 'data' });
  });

  return socket;
}

initSocket();
