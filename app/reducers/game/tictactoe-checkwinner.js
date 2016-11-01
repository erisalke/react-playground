import _ from 'lodash';
import * as types from '../../actions/action-types';


const checkWinner = (board, action) => {
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

export default checkWinner;
