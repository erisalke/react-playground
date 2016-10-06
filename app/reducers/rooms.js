import * as types from '../actions/action-types';

const rooms = (state = {rooms: []}, action) => {

  switch(action.type) {
    // case types.ADD_ROOM:
    //   var newRoom = {
    //     name: action.name
    //   }
    //   const newState = Object.assign({}, state, { rooms: [...state.rooms, newRoom] });
    //   console.log(newState);
    //   return newState;

    case types.CREATE_ROOM_SUCCESS:
      const newState = Object.assign({}, state, { rooms: [...state.rooms, action.room ] });
      return newState;

    case types.GET_ROOMS_SUCCESS:
      return Object.assign({}, state, { rooms: action.rooms });

    // case types.DECREMENT:
    //   return Object.assign({}, state, { count: state.count-1 });

    default:
      return state;
  }
}

export default rooms;
