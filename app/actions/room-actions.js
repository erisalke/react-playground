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

export function addUserToRoom(user, roomId) {
  return {
    type: types.ADD_USER_TO_ROOM,
    user,
		roomId,
  };
}
