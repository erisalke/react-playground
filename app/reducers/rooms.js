import * as types from '../actions/action-types';

const rooms = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_ROOM_SUCCESS: {
      const newState = [...state, action.room];
      return newState;
    }

    case types.GET_ROOMS_SUCCESS:
      return [...action.rooms];

    default:
      return state;

  }
};

export default rooms;
