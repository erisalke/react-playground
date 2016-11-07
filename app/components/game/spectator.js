import React from 'react';
import { connect } from 'react-redux';
import {
	selectTile,
	restartGame,
	addPlayerToGame,
	removePlayerFromGame,
} from '../../actions/tictactoe-actions';
import TicTacToeScore from './tictactoe-score';
import TicTacToeNextMove from './tictactoe-nextMove';
import { emitEvent } from '../../api/websockets';
import store from '../../store';
import _ from 'lodash';


const Spectator = React.createClass({
 	sortedPlayers: function() {
		return _.sortBy(this.props.game.players, [function(o) { return o.name; }])
	},

  render: function() {
    return (
      <div className = 'main-containerX'>

				<TicTacToeScore
					players= { this.props.game.players }
					user= { this.props.user } />

        <div className = 'boardX'>
					{

            this.props.game.board.map((tile,i) => {
							var classVariant = ["cell"]

              if (i === 1 || i === 4 || i === 7) {
                classVariant.push("cellY")
              }
              if (i === 3 || i === 4 || i === 5) {
                classVariant.push("cellX")
              }

							// winning check
							if (this.props.game.winner &&
									this.props.game.winner.hasOwnProperty('user')){
								if (this.props.game.winner.line.some((lineElement) => lineElement===i)){
									classVariant.push("greenCell")
								}
							}

              return (
                <div
                  key = { i }
                  className = { classVariant.join(" ") } >
                    {
											(tile === '')
												? ''
												: (tile === this.sortedPlayers()[0].id)
														? "O"
														: "X"
										}
                </div>
              )
            })
          }

        </div>
      </div>

    );
  }
});

const mapStateToProps = function(store, ownProps) {
	const room = store.rooms.find(room => room.id === ownProps.roomId);

  return {
    game: room.game,
    user: store.session.user,
  };
};

export default connect(mapStateToProps)(Spectator);
