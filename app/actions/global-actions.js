import * as types from '../actions/action-types';


export function loadInitialState(state) {
  return {
    type: types.INIT_STATE,
    state,
  };
}
