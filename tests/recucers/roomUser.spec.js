import { expect } from 'chai';
import reducer from '../../app/reducers/roomUsers';

describe('room reducer >', () => {

	it('returns default on undefined', () => {
		const initialState = undefined;

    const action = { type: 'any' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.be.ok;
  });

	it('adds user to room', () => {
		const initialState = [];

    const action = {
			type: 'ADD_USER_TO_ROOM',
			user: { id: 123, name: 'bob' },
			roomId: 123
		};
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal(
			[{ id: 123, name: 'bob' }]
    );
  });

	it('removes user from room', () => {
		const initialState = [
			{ id: 111, name: 'bob' },
			{ id: 222, name: 'joe' },
			{ id: 333, name: 'lucy' },
		]

		const action = {
			type: 'REMOVE_USER_FROM_ROOM',
			user: { id: 222, name: 'joe' },
			roomId: 123
		};
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal(
			[
				{ id: 111, name: 'bob' },
				{ id: 333, name: 'lucy' },
			]
		);
	});
});
