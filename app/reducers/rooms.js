import * as types from '../actions/action-types';
import chat from './chat';
import roomUsers from './roomUsers';
import tictactoe from './game/tictactoe';

const rooms = (state = [], action) => {

  switch (action.type) {

		case types.GET_ROOMS: {
      return [ ...action.rooms ];
		}

		case types.CREATE_ROOM: {
			return [
				{
					...action.room,
					users: roomUsers(undefined,action),
					chat: chat(undefined,action),
					game: tictactoe(undefined,action),
				},
				...state
			]
		}

		case types.ADD_USER_TO_ROOM: {
			return state.map((room) => {
				if (room.id === action.roomId) {
					room.users = roomUsers(room.users, action);
				}
				return room;
			})
		}

		case types.REMOVE_USER_FROM_ROOM: {
			return state.map((room) => {
				if (room.id === action.roomId) {
					room.users = roomUsers(room.users, action);
				}
				return room;
			})
		}

		case types.UPDATE_CHAT: {
			return state.map((room) => {
				if (room.id === action.roomId) {
					room.chat = chat(room.chat, action);
				}
				return room;
			})
		}

		case types.ADD_PLAYER_TO_GAME: {
			return state.map((room) => {
				if (room.id === action.roomId) {
					room.game = tictactoe(room.game, action);
				}
				return room;
			})
		}

		case types.REMOVE_PLAYER_FROM_GAME: {
			return state.map((room) => {
				if (room.id === action.roomId) {
					room.game = tictactoe(room.game, action);
				}
				return room;
			})
		}

		case types.SELECT_TILE: {
			return state.map((room) => {
				if (room.id === action.roomId) {
					room.game = tictactoe(room.game, action);
				}
				return room;
			})
		}

		case types.RESTART_GAME: {
			return state.map((room) => {
				if (room.id === action.roomId) {
					room.game = tictactoe(room.game, action);
				}
				return room;
			})
		}

    default:
      return state;

  }
};

export default rooms;
