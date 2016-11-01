import * as types from '../actions/action-types';
import chat from './chat';

const room = (users = [], action) => {
  switch (action.type) {

		case types.ADD_USER_TO_ROOM: {
			return [ ...users, action.user ];
		}

		case types.REMOVE_USER_FROM_ROOM: {
			return users.filter(user => {
				return user.id !== action.user.id
			})
		}

    default:
      return users;

  }
};

export default room;
