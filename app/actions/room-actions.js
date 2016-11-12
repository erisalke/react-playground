import * as types from '../actions/action-types';
import crypto from 'crypto';
import { emitEvent } from '../api/websockets';

export function getRoomsSuccess(rooms) {
  return {
    type: types.GET_ROOMS,
    rooms,
  };
}

export function createRoomSuccess(room) {
  return {
    type: types.CREATE_ROOM,
    room,
  };
}

export function createNewRoom(roomName) {
  return dispatch => {
			var room = {
				id: crypto.randomBytes(24).toString('hex'),
				name: roomName
			}
			dispatch( createRoomSuccess(room) )
			emitEvent('action', createRoomSuccess(room))
  };
}

export function addUserToRoom(user, roomId) {
  return {
    type: types.ADD_USER_TO_ROOM,
    user,
		roomId,
  };
}

export function removeUserFromRoom(user, roomId) {
  return {
    type: types.REMOVE_USER_FROM_ROOM,
    user,
		roomId,
  };
}
