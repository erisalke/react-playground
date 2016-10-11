import io from 'socket.io-client';
import store from '../store';
import { getRoomsSuccess, createRoomSuccess } from '../actions/room-actions';

const socket = io.connect('http://localhost:3001', {reconnect: true});

const initSocket = () => {
  socket.on('rooms', function (data) {
    store.dispatch(createRoomSuccess(data))
  });

  socket.on('news', function (data) {
    socket.emit('my other event', { my: 'data' });
  });
}

const emitEvent = (type, payload) => {
  return socket.emit(type, payload);
}

export {
  initSocket,
  emitEvent
}
