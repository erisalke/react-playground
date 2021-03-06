import { expect } from 'chai';

import reducer from '../../../app/reducers/game/tictactoe';


describe('tictactoe reducer >', () => {

  it('returns initial state', () => {
    const nextState = reducer(undefined, {type: 'any'});
    expect(nextState).to.deep.equal( {
			board: ['','','','','','','','','',],
			players: [],
		} );
  });

	it('adds a user to an empty player list, results with host user added', () => {
    const initialState = { players: [] };

    const action = { type: 'ADD_PLAYER_TO_GAME', user: { id: 123, name: 'joe' } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      players: [
				{
					id: 123,
					name: 'joe',
					isHost: true,
					score: 0,
				}
			],
    });
  });

	it('adds a user to a host player list, results with normal user added', () => {
		const initialState = { players: [{ id: 1, name: 'bob', isHost:true  }] };

		const action = { type: 'ADD_PLAYER_TO_GAME', user: { id: 2, name: 'joe' } };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal({
			players: [
				{ id: 1, name: 'bob', isHost:true },
				{ id: 2, name: 'joe', score: 0 },
			],
		});
	});

  it('adds a user to a non-host player list, results with host added', () => {
    const initialState = { players: [{ id: 1, name: 'bob' }] };

    const action = { type: 'ADD_PLAYER_TO_GAME', user: { id: 2, name: 'joe' } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      players: [
        { id: 1, name: 'bob' },
        { id: 2, name: 'joe', isHost:true, score: 0, },
      ],
    });
  });

	it('removes a non-host user from player list, results with a host remaining', () => {
		const initialState = {
			players: [{ id: 123, name: 'bob', isHost:true  },
								{ id: 2, name: 'joe', }]
						};

		const action = { type: 'REMOVE_PLAYER_FROM_GAME', user: { id: 2 } };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal({
			players: [
				{ id: 123, name: 'bob', isHost:true, score: 0, },
			],
		});
	});

	it('removes a host user from player list, results with remaigning player hosting', () => {
		const initialState = {
			players: [{ id: 123, name: 'bob', isHost:true  },
								{ id: 2, name: 'joe', }]
						};

		const action = { type: 'REMOVE_PLAYER_FROM_GAME', user: { id: 123 } };
		const nextState = reducer(initialState, action);

		expect(nextState).to.deep.equal({
			players: [
				{ id: 2, name: 'joe', isHost:true, score: 0, },
			],
		});
	});

	it('removes a last user from player list, results with empty list', () => {
		const initialState = {
			players: [{ id: 123, name: 'bob', isHost:true  }]
		};

		const action = { type: 'REMOVE_PLAYER_FROM_GAME', user: { id: 123 } };
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

    const action = { type: 'SELECT_TILE', position: 2, user: { id: 1 } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      board: ['', '', 1, '', '', '', '', '', ''],
			winner: {},
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

		const actions = [	{ type: 'SELECT_TILE', position: 0, user: { id: 100 }, },
											{ type: 'SELECT_TILE', position: 1, user: { id: 200 }, },
											{ type: 'SELECT_TILE', position: 2, user: { id: 100 }, },
											{ type: 'SELECT_TILE', position: 3, user: { id: 200 }, },
											{ type: 'SELECT_TILE', position: 4, user: { id: 100 }, }, ];
		const nextState = actions.reduce(
			(state, action) => reducer(state, action), initialState);

		expect(nextState).to.deep.equal({
			board: [100,200,100,200,100, '', '', '', ''],
			winner: {},
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

    const action = { type: 'SELECT_TILE', position: 4, user: { id: 123 } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      board: [123, '', '',
              '', 123, '',
              '', '', 123],
      winner: {
				user: { id: 123 },
				line: [0,4,8],
			},
			players: [
				{ id: 123, name: 'bob', isHost:true, score: 1, },
				{ id: 999, name: 'joe', },
			],
    });
  });

});
