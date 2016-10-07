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

const tryit = () => {
  var socket = io('http://localhost');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
  });
}
tryit();

function initSocket() {
  var socket = io.connect('ws://localhost:3001/echo', {reconnect: true})

  //const socket = io('', {path: '/ws'});
  // const socket = io('ws://localhost:3001', {path: '/echo'});


  socket.on('connect', (data) => {
    console.log('------------------ here')
    // store.dispatch(receiveQuestionResult(data))
  });

  socket.on('message', (data) => {
    console.log('some message')
    // store.dispatch(receiveQuestionResult(data))
  });

  return socket;
}

// initSocket();
