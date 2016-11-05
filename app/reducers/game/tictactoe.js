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
				const newWinner = winner(game.board, action);
				const playerAction = newWinner.user
															? { type: types.ADD_POINT, user: newWinner.user }
															: { type: types.ROTATE_TURN };
				return {
					board: board(game.board, action),
					players: players(game.players, playerAction),
					winner: newWinner,
				}
			}

		case types.RESTART_GAME_SUCCESS: {
			return {
				board: board(undefined, action),
				players: players(game.players, { type: types.ROTATE_TURN }),
				winner: winner(undefined, action),
			}
		}

    default:
      return game;
  }
};

export default tictactoe;
