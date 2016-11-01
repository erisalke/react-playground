import io from 'socket.io-client';
import store from '../store';
import { getRoomsSuccess, createRoomSuccess } from '../actions/room-actions';
import { updateChatSuccess } from '../actions/chat-actions';
import { setUserIdSuccess } from '../actions/user-actions';
import { loadInitialState } from '../actions/session-actions';
import { selectTile, updatePlayerList } from '../actions/tictactoe-actions';

const socket = io.connect('http://localhost:8080', {reconnect: true});

const initSocket = () => {
  // ask for initial state (all available rooms)
	socket.on('initial state', (state) => {
		store.dispatch(loadInitialState(state))
	});

	socket.on('action', (action) => {
		store.dispatch(action)
  });


//   socket.emit('get all rooms');
//   socket.on('set user ID', (id) => {
//     store.dispatch(setUserIdSuccess(id));
//   });
//
//   // after getting all rooms, update the state
//   socket.on('all rooms', (data) => {
//     store.dispatch(getRoomsSuccess(data));
//   });
//
//   socket.on('update chat', (msg, user) => {
//     store.dispatch(updateChatSuccess(msg, user));
//   });
//
//   // when new room was added, update the state
//   socket.on('newroom', (data) => {
//     store.dispatch(createRoomSuccess(data));
//   });
//
//   socket.on('update player list', (user) => {
//     store.dispatch(updatePlayerList(user));
//   });
//
// // {pos:position, userId: this.props.user.id}
//   socket.on('opponent position selected', (payload) => {
//     console.log('in the websockets', payload);
//     store.dispatch(selectTile(payload));
//   });
};

const emitEvent = (type, payload) =>
{
	console.log("Client emits event, type:", type,"payload:", payload);
	socket.emit(type, payload)
};

export {
  initSocket,
  emitEvent,
};
