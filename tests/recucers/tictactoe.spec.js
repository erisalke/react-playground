import { expect } from 'chai';

import reducer from '../../app/reducers/tictactoe';

describe('tictactoe reducer', () => {
  it('returns initial state', () => {
    const initialState = undefined;
    const action = { type: 'any' };

    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      board:
            ['', '', '',
              '', '', '',
              '', '', ''],
			gameWinner: ''
    });
    expect(initialState).to.equal(undefined);
  });

  it('adds a user to player list', () => {
    const initialState = { players: [{ id: 1, name: 'bob' }] };

    const action = { type: 'ADD_PLAYER', data: { id: 2, name: 'joe' } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      players: [
        { id: 1, name: 'bob' },
        { id: 2, name: 'joe' },
      ],
    });
  });

  it('selects tile correctly', () => {
    const action = { type: 'SELECT_TILE', data: { pos: 2, userId: 123 } };
    const nextState = reducer(undefined, action);

    expect(nextState).to.deep.equal({
      board: ['', '', 123, '', '', '', '', '', ''],
			nextMove: '',
			gameWinner: '',
			players: [],
    });
  });

  it('switches turn correctly', () => {
    const initialState = {
			board: ['', '', '', '', '', '', '', '', ''],
      players: [
        { id: 111, name: 'bob' },
        { id: 222, name: 'joe' },
      ],
      nextMove: 111,
    };

    const action = { type: 'SELECT_TILE', data: { pos: 7, userId: 111 } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
			board: ['', '', '', '', '', '', '', 111, ''],
      players: [
        { id: 111, name: 'bob' },
        { id: 222, name: 'joe' },
      ],
			gameWinner: '',
      nextMove: { id: 222, name: 'joe' },
    });
  });

  it('spots the winning move', () => {
    const initialState = {
      board: ['', '', '',
              '', 123, '',
              '', '', 123],
    };

    const action = { type: 'SELECT_TILE', data: { pos: 0, userId: 123 } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      board: [123, '', '',
              '', 123, '',
              '', '', 123],
			nextMove: '',
      gameWinner: 123,
			players: [],
    });

  });

});
