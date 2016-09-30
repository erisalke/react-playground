import * as types from '../actions/action-types';

const todo = function(state = { count:0 }, action) {

  switch(action.type) {
    case types.INCREMENT:
      return Object.assign({}, state, { count: state.count+1 });

    case types.DECREMENT:
      return Object.assign({}, state, { count: state.count-1 });

    default:
      return state;
  }
}   

export default todo;
