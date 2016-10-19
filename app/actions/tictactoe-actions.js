import * as types from '../actions/action-types';

export function selectTile(position, sign) {
  return {
    type: types.SELECT_TILE,
    position,
    sign
  };
}
