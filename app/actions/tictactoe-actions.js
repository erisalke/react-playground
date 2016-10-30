import * as types from '../actions/action-types';

export function selectTile(data) {
  return {
    type: types.SELECT_TILE,
    data,
  };
}

export function restartGame() {
  return {
    type: types.RESTART_GAME,
  };
}

export function addPlayerToGame(user) {
  return {
    type: types.ADD_PLAYER,
    user,
  };
}

export function removePlayerFromGame(user) {
  return {
    type: types.REMOVE_PLAYER,
    user,
  };
}
