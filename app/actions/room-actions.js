import * as types from '../actions/action-types';

export function getRoomsSuccess(rooms) {
  return {
    type: types.GET_ROOMS_SUCCESS,
    rooms,
  };
}

export function createRoomSuccess(room) {
  return {
    type: types.CREATE_ROOM_SUCCESS,
    room,
  };
}
