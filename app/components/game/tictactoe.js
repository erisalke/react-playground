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

const TicTacToe = React.createClass({
  componentDidMount: function(){
		const roomId = this.props.roomId;
		const user = this.props.user;

		emitEvent('action', addPlayerToGame(user, roomId))
		store.dispatch(addPlayerToGame(user, roomId))
  },

  componentWillUnmount: function() {
		const roomId = this.props.roomId;
		const player = this.props.game.players.find(
			player => player.id === this.props.user.id
		);

		if (player) {
			emitEvent('action', removePlayerFromGame(player, roomId))
			store.dispatch(removePlayerFromGame(player, roomId))
		}
  },


  markTile: function(position){
		const user = this.props.user;
		const roomId = this.props.roomId;

		if (this.props.game.players[0].id === this.props.user.id
				&& this.props.game.players.length === 2
				&& ! this.props.game.board[position]
				&& ! (this.props.game.winner
					&& this.props.game.winner.hasOwnProperty('user'))) {
			store.dispatch(selectTile(position, user, roomId))
	    emitEvent('action', selectTile(position, user, roomId))
		}
  },


  render: function() {
    return (
      <div className = 'main-containerX'>
				<TicTacToeNextMove
					winner= { this.props.game.winner }
					players= { this.props.game.players }
					restartGame= { this.props.restartGame } />
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
									if (this.props.game.winner.user.id === this.props.user.id){
											classVariant.push("greenCell")
									} else {
										classVariant.push("redCell")
									}
								}
							}

              return (
                <div
                  key = { i }
                  className = { classVariant.join(" ") }
                  onClick = { ()=>{ this.markTile(i)} }>
                    {
											(tile === '') ? '' :
												(tile === this.props.user.id) ?
													this.props.signs.me :
													this.props.signs.opp
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
		signs: store.session.signs,
		roomId: room.id,
  };
};

function mapDispatchToProps(dispatch, ownProps) {
  return { restartGame :
		function () {
			dispatch(restartGame( ownProps.roomId ))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
