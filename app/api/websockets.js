import io from 'socket.io-client';
import store from '../store';
import { getRoomsSuccess, createRoomSuccess } from '../actions/room-actions';

const socket = io.connect('http://localhost:3001', {reconnect: true});

const initSocket = () => {
  // ask for initial state (all available rooms)
  socket.emit('get all rooms')

  // after getting all rooms, update the state
  socket.on('all rooms', (data) => {
    store.dispatch(getRoomsSuccess(data))
  });

  // when new room was added, update the state
  socket.on('newroom', function (data) {
    store.dispatch(createRoomSuccess(data))
  });
}

const emitEvent = (type, payload) => {
  return socket.emit(type, payload);
}

export {
  initSocket,
  emitEvent
}
