import _ from 'lodash';
import * as types from '../actions/action-types';


const initialState = () => ({
	board: ['', '', '', '', '', '', '', '', ''],
	players: [],
});

const ticTacToe = (state = initialState(), action) => {
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
				const gameWinner = checkGameWinner(state.board, action)
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

const board = (board = ['', '', '', '', '', '', '', '', ''], action) => {
	switch (action.type) {
		case types.SELECT_TILE:
			return [
				...board.slice(0, action.data.pos),
				action.data.userId,
				...board.slice(action.data.pos + 1),
			]
		default:
			return board;
	}
};

const checkGameWinner = (board, action) => {
	const winningRows = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8],
		[0, 3, 6], [1, 4, 7], [2, 5, 8],
		[0, 4, 8], [2, 4, 6],
	];

	const allPositions = board.reduce((result, next, index) => {
		if (next === action.data.userId) {
			result.push(index);
		}
		return result;
	}, [action.data.pos]);

	switch (action.type) {
		case types.SELECT_TILE:
			{
				// go through all winningRows searching for first which fully matches allPositions
				if (winningRows.some(row =>
			     row.every(elem => allPositions.indexOf(elem) > -1))) {
						 return action.data.userId
					 }
			}

		default:
			return undefined;
	}
};

export default ticTacToe;
