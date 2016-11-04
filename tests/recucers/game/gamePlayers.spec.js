import { expect } from 'chai';

import reducer from '../../../app/reducers/game/players';

describe('players reducer >', () => {

	it('returns initial state', () => {
		const initialState = undefined

		const action = { type: 'any' };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal( [] );
	});

	it('rotete turn, rotates the players array', () => {
		const initialState = [
			{ id: 23, name: "lucy" },
			{ id: 5, name: "micky" },
		];

    const action = { type: 'ROTATE_TURN' };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal([
				{ id: 5, name: "micky" },
				{ id: 23, name: "lucy" },
			]);
  });

	it('add player to empty list, returns a host player', () => {
		const initialState = [];

		const action = {
			type: 'ADD_PLAYER_TO_GAME',
			user: { id: 2, name: 'joe' }
		};
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal(
			[ { id: 2, name: 'joe', isHost: true } ]
		);
	});

	it('add player to host player, returns both', () => {
		const initialState = [
			{ id: 1, name: 'bob', isHost: true }
		];

		const action = {
			type: 'ADD_PLAYER_TO_GAME',
			user: { id: 2, name: 'joe' }
		};
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal([
				{ id: 1, name: 'bob', isHost: true },
				{ id: 2, name: 'joe' },
			]
		);
	});

	it('add player to nonHost player, returns both with host added', () => {
		const initialState = [{ id: 1, name: 'bob' }];

		const action = {
			type: 'ADD_PLAYER_TO_GAME',
			user: { id: 2, name: 'joe' }
		};
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal([
				{ id: 1, name: 'bob' },
				{ id: 2, name: 'joe', isHost:true },
			]);
	});

	it('removes a non-host user from player list, results with a host remaining', () => {
		const initialState = [
			{ id: 123, name: 'bob', isHost:true  },
			{ id: 2, name: 'joe', }
		];

		const action = { type: 'REMOVE_PLAYER_FROM_GAME', user: { id: 2 } };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal([
				{ id: 123, name: 'bob', isHost:true  },
			]
		);
	});

	it('removes a host user from player list, results with remaigning player hosting', () => {
		const initialState = [
			{ id: 123, name: 'bob', isHost:true  },
			{ id: 2, name: 'joe', }
		];

		const action = { type: 'REMOVE_PLAYER_FROM_GAME', user: { id: 123 } };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal([
				{ id: 2, name: 'joe', isHost:true  },
			]
		);
	});

	it('removes a last user from player list, results with empty list', () => {
		const initialState = [
			{ id: 123, name: 'bob', isHost:true  }
		]

		const action = { type: 'REMOVE_PLAYER_FROM_GAME', user: { id: 123 } };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal( [] );
	});

});
