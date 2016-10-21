import * as types from '../actions/action-types';

export function selectTile(position, sign) {
  return {
    type: types.SELECT_TILE,
    position: position,
    sign: sign
  };
}

export function restartGame() {
  return {
    type: types.RESTART_GAME
  };
}

export function updatePlayerList(players) {
  return {
    type: types.UPDATE_PLAYERS_LIST,
    players
  };
}
