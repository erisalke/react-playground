import * as types from '../actions/action-types';

const rooms = (state = [], action) => {
  switch (action.type) {

		case types.ADD_USER_TO_ROOM: {
				return state.map((room) => {
					if (room.id === action.roomId) {
						room.users = [ ...room.users, action.user ];
					}
					return room;
				})
		}

    case types.CREATE_ROOM_SUCCESS: {
      return [...state, {...action.room, users:[] }];
    }

    case types.GET_ROOMS_SUCCESS:
      return [...action.rooms];

    default:
      return state;

  }
};

export default rooms;
