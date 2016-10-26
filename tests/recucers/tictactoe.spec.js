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
    const initialState = {
      board: ['', '', '', '', '', '', '', '', ''],
    };

    const action = { type: 'SELECT_TILE', data: { pos: 2, userId: 123 } };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      board: ['', '', 123, '', '', '', '', '', ''],
    });
  });

  it('switches turn correctly', () => {
    const initialState = {
      players: [
        { id: 111, name: 'bob' },
        { id: 222, name: 'joe' },
      ],
      nextTurn: 111,
    };

    const action = { type: 'SWITCH_TURN', userIdEndTurn: 111 };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      players: [
        { id: 111, name: 'bob' },
        { id: 222, name: 'joe' },
      ],
      nextTurn: 222,
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

      winner: 123,
    });

  });

});
