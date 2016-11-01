import * as types from '../actions/action-types';
// import tictactoe from './game/tictactoe';
// import chat from './chat';

const rooms = (state = [], action) => {
  switch (action.type) {

		case types.GET_ROOMS_SUCCESS:
      return [ ...action.rooms ];

    case types.CREATE_ROOM_SUCCESS:
      return [
				...state,
				{
					...action.room,
					users: [],
				}
			];

		case types.ADD_USER_TO_ROOM: {
			return state.map((room) => {
				if (room.id === action.roomId) {
					room.users = [ ...room.users, action.user ];
				}
				return room;
			})
		}

		case types.REMOVE_USER_FROM_ROOM: {
			return state.map((room) => {
				if (room.id === action.roomId) {
					room.users = room.users.filter((user) => {
						return user.id !== action.user.id
					})
				}
				return room;
			})
		}

    default:
      return state;

  }
};

export default rooms;
