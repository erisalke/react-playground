import io from 'socket.io-client';
import store from '../store';
import { getRoomsSuccess, createRoomSuccess } from '../actions/room-actions';
import * as types from './websockets-action-types'

const socket = io.connect('http://localhost:3001', {reconnect: true});

const initSocket = () => {
  socket.on(types.ALL_ROOMS, function (data) {
    store.dispatch(getRoomsSuccess(data))
  });

  socket.on(types.NEW_ROOM, function (data) {
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
