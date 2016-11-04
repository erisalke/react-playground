import * as types from '../actions/action-types';

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

export function restartGameRequest(user, roomId) {
  return {
    type: types.RESTART_GAME_REQUEST,
  };
}
