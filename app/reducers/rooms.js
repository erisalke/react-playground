import * as types from '../actions/action-types';

const rooms = (state = {rooms: []}, action) => {

  switch(action.type) {

    case types.CREATE_ROOM_SUCCESS:
      const newState = Object.assign({}, state, { rooms: [...state.rooms, action.room ] });
      return newState;

    case types.GET_ROOMS_SUCCESS:
      return Object.assign({}, state, { rooms: action.rooms });

    default:
      return state;
  }
}

export default rooms;
