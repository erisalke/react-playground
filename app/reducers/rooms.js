import * as types from '../actions/action-types';

const rooms = (state = {rooms: []}, action) => {

  switch(action.type) {
    case types.ADD_ROOM:
      var newRoom = {
        name: action.name
      }
      const newState = Object.assign({}, state, { rooms: [...state.rooms, newRoom] });
      console.log(newState);
      return newState;

    // case types.DECREMENT:
    //   return Object.assign({}, state, { count: state.count-1 });

    default:
      return state;
  }
}

export default rooms;
