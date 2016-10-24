import io from 'socket.io-client';
import store from '../store';
import { getRoomsSuccess, createRoomSuccess } from '../actions/room-actions';
import { updateChatSuccess } from '../actions/chat-actions';
import { setUserIdSuccess } from '../actions/user-actions';

import { selectTile, updatePlayerList } from '../actions/ticTacToe-actions';

const socket = io.connect('http://localhost:3001', {reconnect: true});

const initSocket = () => {
  // ask for initial state (all available rooms)
  socket.emit('get all rooms')
  socket.on('set user ID', function (id) {
    store.dispatch(setUserIdSuccess(id))
  });

  // after getting all rooms, update the state
  socket.on('all rooms', (data) => {
    store.dispatch(getRoomsSuccess(data))
  });

  socket.on('update chat', function (msg, user) {
    store.dispatch(updateChatSuccess(msg, user))
  });

  // when new room was added, update the state
  socket.on('newroom', function (data) {
    store.dispatch(createRoomSuccess(data))
  });

  socket.on('update player list', function (user) {
    store.dispatch(updatePlayerList(user))
  });

// {pos:position, userId: this.props.user.id}
  socket.on('opponent position selected', function (payload) {
    console.log("in the websockets",payload)
    store.dispatch(selectTile(payload))
  });

}

const emitEvent = (type, payload) => {
  return socket.emit(type, payload);
}

export {
  initSocket,
  emitEvent
}
