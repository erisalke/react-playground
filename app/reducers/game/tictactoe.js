import _ from 'lodash';
import * as types from '../../actions/action-types';
import board from './board';
import winner from './winner';
import players from './players';


const initialState = {
	board: board(undefined, { type:'any' }),
	players: players(undefined, { type:'any' }),
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
						players: players(game.players, action)
					}
				);
			}

		case types.REMOVE_PLAYER_FROM_GAME: {
				return _.assign(
					{},
					game,
					{
						players: players(game.players, action)
					}
				);
			}

		case types.SELECT_TILE:	{
				return {
					board: board(game.board, action),
					winner: winner(game.board, action),
					players: players(game.players, { type: types.ROTATE_TURN }),
				}
			}

    default:
      return game;
  }
};

export default tictactoe;
