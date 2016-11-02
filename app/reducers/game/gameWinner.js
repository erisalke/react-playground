import * as types from '../../actions/action-types';

const winningRows = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8],
	[0, 3, 6], [1, 4, 7], [2, 5, 8],
	[0, 4, 8], [2, 4, 6],
];

const allPositions = (board, position, userId) => {
	return board.reduce(
		(result, next, index) => {
			if (next === userId) {
				result.push(index);
			}
			return result;
		}, [ position ]);
}

const gameWinner = (board =[], action) => {
	const all = allPositions(board, action.position, action.user.id);

	switch (action.type) {
		case types.SELECT_TILE: {
				// go through all winningRows searching for first which matches allPositions
				const winningLine = winningRows.find(
					row => row.every(elem => all.indexOf(elem) > -1)
				)

				if (winningLine) {
					return {
						winner: action.user.id,
						winningLine
					}
				}
		 }

		default:
			return {};
	}
};

export default gameWinner;
