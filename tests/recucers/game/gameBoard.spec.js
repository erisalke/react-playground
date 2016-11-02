import { expect } from 'chai';

import reducer from '../../../app/reducers/game/gameBoard';

describe('gameBoard reducer >', () => {

	it('returns initial state', () => {
		const initialState = undefined

		const action = { type: 'any' };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal(
			['', '', '', '', '', '', '', '', '']
		)
	});

	it('select tile, marks the tile with userId', () => {
		const initialState = ['', '', '', '', '', '', '', '', ''];

    const action = { type: 'SELECT_TILE', position: 2, user: { id: 1 } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(
			['', '', 1, '', '', '', '', '', '']
		);
  });

});
