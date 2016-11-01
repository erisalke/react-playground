import * as types from '../actions/action-types';
import chat from './chat';
import roomUsers from './roomUsers';


const rooms = (state = [], action) => {
	
  switch (action.type) {

		case types.UPDATE_CHAT_SUCCESS: {
			return state.map((room) => {
				if (room.id === action.roomId) {
					room.chat = chat(room.chat, action);
				}
				return room;
			})
		}

		case types.GET_ROOMS_SUCCESS: {
      return [ ...action.rooms ];
		}

		case types.CREATE_ROOM_SUCCESS: {
			return [
				...state,
				{
					...action.room,
					users: roomUsers(undefined,action),
					chat: chat(undefined,action),
				}
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

    default:
      return state;

  }
};

export default rooms;
