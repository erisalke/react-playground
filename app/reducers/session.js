import * as types from '../actions/action-types';

const session = (state = {}, action) => {
  switch (action.type) {

    case types.SET_USER_INTERNAL:
			return Object.assign({}, state, { user: action.user });

    default:
      return state;
  }
};

export default session;
