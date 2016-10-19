import { expect } from 'chai'
import reducer from '../../app/reducers/tictactoe';

var initialState = () => {
  return {
    board: [0,1,2,3,4,5,6,7,8],
    turn: 0,
    players: [],
    upToPlayers: 2,
    nextMove: 0
}}

describe('tictactoe', function() {
	describe('on default:', function() {
		it('returns the initial state', function() {
			expect(reducer()).to.deep.equal(initialState());
		});
	});

  describe('on SELECT_TILE action:', function() {
    it('returns the initial state again', function() {
      var state;
      beforeEach(function() {
        state = initialState()
      });

      const result = reducer(state, {type: 'SELECT_TILE', position: 7, sign:'X'});

      expect(result).to.deep.equal({
        board: [0,1,2,3,4,5,6,'X',8],
        turn: 0,
        players: [],
        upToPlayers: 2,
        nextMove: 0
      })
    });
  });

  describe('on SELECT_TILE action:', function() {
  	var state;
  	beforeEach(function() {
  		state = initialState()
  	});

    // const result = reducer(state, {type: 'ADD_ITEM', position: 7});
    const result = reducer(state, {type: 'SELECT_TILE', position: 7, sign:'X'});

  	it('returns the state with the field selected', function() {
  		expect(result).to.deep.equal({
        board: [0,1,2,3,4,5,6,'X',8],
        turn: 0,
        players: [],
        upToPlayers: 2,
        nextMove: 0
      });
  	});
  });
});
