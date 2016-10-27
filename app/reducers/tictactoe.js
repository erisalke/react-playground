import _ from 'lodash';
import * as types from '../actions/action-types';


const initialState = () => ({
	board: ['', '', '', '', '', '', '', '', ''],
	gameWinner: '',
	players: [],
});

const nextMove = (state, action) => {
	switch (action.type) {
		case types.SELECT_TILE:
			{
				const nextPlayer = state.players.find( p => p.id !== action.data.userId )
				if (nextPlayer !== undefined) {
					return nextPlayer.id;
				}
				return '';
			}

		case types.ADD_PLAYER:
			{
				if (state.nextMove !== ''){
					return state.nextMove
				}
				return action.user.id
			}

		default:
			return '';
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

const gameWinner = (board, action) => {
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
			return '';
	}
};

const ticTacToe = (state = initialState(), action) => {
  switch (action && action.type) {

		case types.SELECT_TILE:
      return {
				board: board(state.board, action),
				gameWinner: gameWinner(state.board, action),
				nextMove: nextMove(state, action),
				players: state.players || []
			}

    case types.ADD_PLAYER:
      {
        const result = _.assign({}, state, { players: [...state.players, action.user] });
        return result;
      }

    default:
      return state;
  }
};


export default ticTacToe;
