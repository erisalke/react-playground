import * as types from '../actions/action-types';
import { Map, List } from 'immutable';

const initialState = () => {
  const state = new Map();
  const newState = state.set('board', List.of('', '', '', '', '', '', '', '', ''));
  return newState;
};

const ticTacToe = (state = initialState(), action) => {
  switch (action && action.type) {
    case types.SELECT_TILE:
      {
        const board = state.get('board');
        const before = board.slice(0, action.pos);
        const after = board.slice(action.pos + 1);

        return state.merge({
          board: [...before, 'X', ...after],
        });
      }

    default:
      return state;
  }
};

export default ticTacToe;
