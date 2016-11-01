import _ from 'lodash';
import * as types from '../../actions/action-types';


const initialState = () => (
	['', '', '', '', '', '', '', '', '']
)

const board = (board = initialState(), action) => {
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

export default board;
