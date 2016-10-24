import * as types from '../actions/action-types';

const initialState = () => {
  return {
    board: ["","","",
            "","","",
            "","",""],
    turn: 0,
    upToPlayers: 2,
    nextMove: 0,
    players: [], // playerA, playerB
  }
}

const ticTacToe = (state = initialState(), action) => {

  switch(action && action.type) {

    case types.UPDATE_PLAYERS_LIST:
      return Object.assign({}, state, {
          players: [ ...action.players],
      });

    case types.RESTART_GAME:
      return initialState();

    case types.SELECT_TILE:
    // {pos: position, userId: this.props.user.id}
      return Object.assign({}, state, {
        board: [ ...state.board.slice(0, action.payload.pos),
                 "X",
                 ...state.board.slice(action.payload.pos+1) ],
      });

    default:
      return state;
  }
}

export default ticTacToe;
