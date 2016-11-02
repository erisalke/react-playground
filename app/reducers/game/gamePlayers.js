import * as types from '../../actions/action-types';


const gamePlayers = (players = [], action) => {
  switch (action && action.type) {

		case types.ADD_PLAYER_TO_GAME: {
				if (players.length > 2) {
					return players
				}

				const player = players.some(p => p.isHost)
												? action.user
												: { ...action.user, isHost: true }

				return [ ...players, player ]
	    }

		case types.REMOVE_PLAYER_FROM_GAME: {
				let newPlayers = players.filter(
													player => player.id !== action.user.id
												)

				if ( newPlayers.length > 0 &&
							! newPlayers.some(player => player.isHost) ) {
					newPlayers[0].isHost = true
				}

				return newPlayers;
	    }

		case types.ROTATE_TURN: {
				return [...players.slice(1), players[0] ]
			}

    default:
      return players;

  }
};

export default gamePlayers;
