import _ from 'lodash';
import * as types from '../actions/action-types';


const initialState = () => ({ board: ['', '', '', '', '', '', '', '', ''] });

const checkWinningMove = (board, userId) => {
  const winningRows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const allPositions = board.reduce((result, next, index) => {
    if (next === userId) {
      result.push(index);
    }
    return result;
  }, []);

// go through all winningRows searching for first which fully matches allPositions
  const solution = winningRows.find(row =>
     row.every(elem => allPositions.indexOf(elem) > -1)
  );

  return solution;
};

const ticTacToe = (state = initialState(), action) => {
  switch (action && action.type) {
    case types.SELECT_TILE:
      {
        const id = action.data.userId;
        const before = state.board.slice(0, action.data.pos);
        const after = state.board.slice(action.data.pos + 1);
        const newBoard = [...before, id, ...after];

        const winning = checkWinningMove(newBoard, id);

        if (winning) {
          return _.assign({}, state,
            {
              board: newBoard,
              winner: id,
            });
        }

        return _.assign({}, state,
          {
            board: newBoard,
          });
      }

    case types.SWITCH_TURN:
      {
        return _.assign({}, state,
          {
            nextTurn: state.players.find(p => p.id !== action.userIdEndTurn).id,
          });
      }

    case types.ADD_PLAYER:
      {
        const result = _.assign({}, state, { players: [...state.players, action.data] });
        return result;
      }

    default:
      return state;
  }
};


export default ticTacToe;
