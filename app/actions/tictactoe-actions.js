import * as types from '../actions/action-types';
import { emitEvent } from '../api/websockets';


export function selectTile(position, user, roomId) {
  return {
    type: types.SELECT_TILE,
		position,
		user,
		roomId,
  };
}

export function addPlayerToGame(user, roomId) {
  return {
    type: types.ADD_PLAYER_TO_GAME,
    user,
		roomId,
  };
}

export function removePlayerFromGame(user, roomId) {
  return {
    type: types.REMOVE_PLAYER_FROM_GAME,
    user,
		roomId,
  };
}

export function restartGameSuccess(roomId) {
	return {
    type: types.RESTART_GAME_SUCCESS,
		roomId,
  };
}

export function restartGame(roomId) {
  return dispatch => {
			dispatch( restartGameSuccess(roomId) )
			emitEvent('action', restartGameSuccess(roomId))
  };
}
