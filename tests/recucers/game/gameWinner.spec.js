import { expect } from 'chai';

import reducer from '../../../app/reducers/game/gameWinner';

describe('gameWinner reducer >', () => {

	it('spots the winning move', () => {
		const initialState = [
			123, '', '',
			'', '', '',
			'', '', 123,
		];

		const action = { type: 'SELECT_TILE', position: 4, user: { id: 123 } };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal({
			winner: 123,
			winningLine: [0, 4, 8]
		});
	});

});
