import _ from 'lodash';
import * as types from '../../actions/action-types';
import gameBoard from './gameBoard';
import gameWinner from './gameWinner';
import gamePlayers from './gamePlayers';


const initialState = {
	board: gameBoard(undefined, { type:'any' }),
	players: gamePlayers(undefined, { type:'any' }),
}

const tictactoe = (game = initialState, action) => {
  switch (action && action.type) {

		case types.ADD_PLAYER_TO_GAME: {
				if (game.players.length >= 2) {
					return game
				}

				return _.assign(
					{},
					game,
					{
						players: gamePlayers(game.players, action)
					}
				);
			}

		case types.REMOVE_PLAYER_FROM_GAME: {
				return _.assign(
					{},
					game,
					{
						players: gamePlayers(game.players, action)
					}
				);
			}

		case types.SELECT_TILE:	{
				return {
					board: gameBoard(game.board, action),
					gameWinner: gameWinner(game.board, action),
					players: gamePlayers(game.players, { type: types.ROTATE_TURN }),
				}
			}

    default:
      return game;
  }
};

export default tictactoe;
