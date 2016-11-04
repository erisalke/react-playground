import _ from 'lodash';
import * as types from '../../actions/action-types';


const initialState = () => (
	['', '', '', '', '', '', '', '', '']
)

const gameBoard = (board = initialState(), action) => {
	switch (action.type) {

		case types.SELECT_TILE: {
				return [
					...board.slice(0, action.position),
					action.user.id,
					...board.slice(action.position + 1),
				]
			}

		default:
			return board;
	}
};

export default gameBoard;
