import _ from 'lodash';
import * as types from '../../actions/action-types';
import board from './tictactoe-board';
import checkWinner from './tictactoe-checkwinner';

const initialState = () => ({
	board: ['', '', '', '', '', '', '', '', ''],
	players: [],
});

const tictactoe = (state = initialState(), action) => {
  switch (action && action.type) {

		case types.ADD_PLAYER:
      {
				const player = state.players.some(p => p.isHost) ?
													action.user :
													{ ...action.user, isHost: true }

				return _.assign({},
					state,
					{
						players: [
							...state.players, player
						]
					});
      }

		case types.REMOVE_PLAYER:
      {
				let players = [
					...state.players.filter(
							player => ( player.id !== action.user.id )
					)
				]

				if ( players.length > 0 &&
							! players.some(player => player.isHost) ) {
					players[0].isHost = true
				}

				return _.assign({}, state, { players: players });
      }

		case types.SELECT_TILE:
			{
				const gameWinner = checkWinner(state.board, action)

				if (gameWinner) {
					return {
						board: board(state.board, action),
						players: [...state.players.slice(1), state.players[0] ],
						gameWinner
					}
				}

	      return {
					board: board(state.board, action),
					players: [...state.players.slice(1), state.players[0] ],
				}
			}

    default:
      return state;
  }
};

export default tictactoe;
