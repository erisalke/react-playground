import { Map, fromJS, List} from 'immutable';
import { expect } from 'chai';

import reducer from '../../app/reducers/tictactoe';

const getInitialState = () => (
  fromJS({
    board: ['', '', '',
            '', '', '',
            '', '', ''],
  })
);

describe('tictactoe reducer', () => {
  it('returns initial state', () => {
    const initialState = undefined;
    const action = { type: 'any' };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      board: ['', '', '',
              '', '', '',
              '', '', ''],
    }));
    expect(initialState).to.equal(undefined);
  });

  it('selects tile correctly', () => {
    const initialState = getInitialState();
    const action = { type: 'SELECT_TILE', pos: 3 };

    const nextState = reducer(initialState, action);

    expect(nextState).to.equal(fromJS({
      board: ['', '', '',
              'X', '', '',
              '', '', ''],
    }));
  });
});
