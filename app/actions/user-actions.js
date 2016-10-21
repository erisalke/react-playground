import * as types from '../actions/action-types';

export function setUserName(name) {
  return {
    type: types.SET_USER_NAME,
    name
  };
}

export function setUserIdSuccess(id) {
  return {
    type: types.SET_USER_ID,
    id
  };
}
