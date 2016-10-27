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

export function updatePlayerList(user) {
  return {
    type: types.ADD_PLAYER,
    user,
  };
}
