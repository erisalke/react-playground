import * as types from '../actions/action-types';

const initialState = () => {
  return {
    board: [0,1,2,3,4,5,6,7,8],
    turn: 0,
    upToPlayers: 2,
    nextMove: 0,
    players: [], // playerA, playerB
  }
}

const ticTacToe = (state = initialState(), action) => {

  switch(action && action.type) {

    case types.RESTART_GAME:
      return initialState();

    case types.SELECT_TILE:
      return Object.assign({}, state, {
          board: [ ...state.board.slice(0, action.position),
                   action.sign,
                   ...state.board.slice(action.position+1) ],
      });

    default:
      return state;
  }
}

export default ticTacToe;
