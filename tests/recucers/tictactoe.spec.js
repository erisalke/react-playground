import { expect } from 'chai';

import reducer from '../../app/reducers/game/tictactoe';

describe('tictactoe reducer', () => {

  it('returns initial state', () => {
    const nextState = reducer(undefined, {type: 'any'});
    expect(nextState).to.deep.equal({
      board: ['', '', '',
              '', '', '',
              '', '', ''],
			players: [],
    });
  });

	it('adds a user to an empty player list, results with host user added', () => {
    const initialState = { players: [] };

    const action = { type: 'ADD_PLAYER', user: { id: 123, name: 'joe' } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      players: [
        { id: 123, name: 'joe', isHost: true },
      ],
    });
  });

	it('adds a user to a host player list, results with normal user added', () => {
		const initialState = { players: [{ id: 1, name: 'bob', isHost:true  }] };

		const action = { type: 'ADD_PLAYER', user: { id: 2, name: 'joe' } };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal({
			players: [
				{ id: 1, name: 'bob', isHost:true  },
				{ id: 2, name: 'joe'},
			],
		});
	});

  it('adds a user to a non-host player list, results with host added', () => {
    const initialState = { players: [{ id: 1, name: 'bob' }] };

    const action = { type: 'ADD_PLAYER', user: { id: 2, name: 'joe' } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      players: [
        { id: 1, name: 'bob' },
        { id: 2, name: 'joe', isHost:true },
      ],
    });
  });

	it('removes a non-host user from player list, results with a host remaining', () => {
		const initialState = {
			players: [{ id: 123, name: 'bob', isHost:true  },
								{ id: 2, name: 'joe', }]
						};

		const action = { type: 'REMOVE_PLAYER', user: { id: 2 } };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal({
			players: [
				{ id: 123, name: 'bob', isHost:true  },
			],
		});
	});

	it('removes a host user from player list, results with remaigning player hosting', () => {
		const initialState = {
			players: [{ id: 123, name: 'bob', isHost:true  },
								{ id: 2, name: 'joe', }]
						};

		const action = { type: 'REMOVE_PLAYER', user: { id: 123 } };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal({
			players: [
				{ id: 2, name: 'joe', isHost:true  },
			],
		});
	});

	it('removes a last user from player list, results with empty list', () => {
		const initialState = {
			players: [{ id: 123, name: 'bob', isHost:true  }]
		};

		const action = { type: 'REMOVE_PLAYER', user: { id: 123 } };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal({
			players: [],
		});
	});

  it('select tile, marks the tile with userId and rotates the players array', () => {
		const initialState = {
			board: ['', '', '', '', '', '', '', '', ''],
			players: [{ id: 1, name: 'bob', isHost:true  },
								{ id: 2, name: 'joe', }]
							};

    const action = { type: 'SELECT_TILE', data: { pos: 2, userId: 1 } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      board: ['', '', 1, '', '', '', '', '', ''],
			players: [{ id: 2, name: 'joe', },
								{ id: 1, name: 'bob', isHost:true  }]
    });
  });

	it('multiple select tile, doesnt break the player list', () => {
		const initialState = {
			board: ['', '', '', '', '', '', '', '', ''],
			players: [{ id: 100, name: 'bob', isHost:true  },
								{ id: 200, name: 'joe', }]
							};

		const actions = [	{ type: 'SELECT_TILE', data: { pos: 0, userId: 100 } },
											{ type: 'SELECT_TILE', data: { pos: 1, userId: 200 } },
											{ type: 'SELECT_TILE', data: { pos: 2, userId: 100 } },
											{ type: 'SELECT_TILE', data: { pos: 3, userId: 200 } },
											{ type: 'SELECT_TILE', data: { pos: 4, userId: 100 } },	];
		const nextState = actions.reduce(
			(state, action) => reducer(state, action), initialState);

		expect(nextState).to.deep.equal({
			board: [100,200,100,200,100, '', '', '', ''],
			players: [{ id: 200, name: 'joe', },
								{ id: 100, name: 'bob', isHost:true  }]
		});
	});

  it('spots the winning move', () => {
		const initialState = {
			board: [123, '', '',
              '', '', '',
              '', '', 123],
			players: [{ id: 123, name: 'bob', isHost:true  },
								{ id: 999, name: 'joe', }]
							};

    const action = { type: 'SELECT_TILE', data: { pos: 4, userId: 123 } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      board: [123, '', '',
              '', 123, '',
              '', '', 123],
      gameWinner: 123,
			players: [{ id: 999, name: 'joe', },
								{ id: 123, name: 'bob', isHost:true  },
								],
    });
  });

});
