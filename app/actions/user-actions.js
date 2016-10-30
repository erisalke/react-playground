import * as types from '../actions/action-types';

export function setUser(user) {
  return {
    type: types.SET_USER,
    user,
  };
}
