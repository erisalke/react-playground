import * as types from '../actions/action-types';

const user = (state = {}, action) => {

  switch(action.type) {

    case types.SET_USER_NAME:
      return Object.assign({}, state, {name: action.name});

    case types.SET_USER_ID:
      return Object.assign({}, state, {id: action.id});

    default:
      return state;
  }
}

export default user;
