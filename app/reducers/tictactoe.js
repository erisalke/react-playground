import * as types from '../actions/action-types';

const ticTacToe = (state = [0,0,0,
                            0,0,0,
                            0,0,0], action) => {

  switch(action.type) {

    case types.SELECT_TILE:
      return [ ...state.slice(0, action.position),
                  action.sign,
               ...state.slice(action.position+1) ];

    default:
      return state;
  }
}

export default ticTacToe;
