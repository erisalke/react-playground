import * as types from '../actions/action-types';


export function loadInitialState(state) {
  return {
    type: types.INIT_STATE,
    state,
  };
}

export function setUserInternal(user) {
  return {
    type: types.SET_USER_INTERNAL,
    user,
  };
}
