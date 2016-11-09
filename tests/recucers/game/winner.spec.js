import { expect } from 'chai';

import reducer from '../../../app/reducers/game/winner';

describe('winner reducer >', () => {

	it('spots the winning move', () => {
		const initialState = [
			123, '', '',
			'', '', '',
			'', '', 123,
		];

		const action = { type: 'SELECT_TILE', position: 4, user: { id: 123, name: "bob" } };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal({
			user: { id:123, name: "bob" },
			line: [0, 4, 8]
		});
	});

});
