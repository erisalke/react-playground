import * as types from '../actions/action-types';

const users = (state = [], action) => {
  switch (action.type) {
    case types.SET_USER: {
      return [...state, action.user ];
		}

    default:
      return state;
  }
};

export default users;
