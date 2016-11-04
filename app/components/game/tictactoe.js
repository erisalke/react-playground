import React from 'react';
import { connect } from 'react-redux';
import {
	selectTile,
	restartGame,
	addPlayerToGame,
	removePlayerFromGame,
} from '../../actions/tictactoe-actions';
import TicTacToePlayers from './tictactoe-players';
import { emitEvent } from '../../api/websockets';
import store from '../../store';

const TicTacToe = React.createClass({
  componentDidMount: function(){
		const user = this.props.user;
		const roomId = this.props.roomId;
		emitEvent('action', addPlayerToGame(user, roomId))
		store.dispatch(addPlayerToGame(user, roomId))
  },

  componentWillUnmount: function() {
		const user = this.props.user;
		const roomId = this.props.roomId;
		emitEvent('action', removePlayerFromGame(user, roomId))
		store.dispatch(removePlayerFromGame(user, roomId))
  },


  markTile: function(position){
		const user = this.props.user;
		const roomId = this.props.roomId;

		if (this.props.game.players[0].id === this.props.user.id){
			store.dispatch(selectTile(position, user, roomId))
	    emitEvent('action', selectTile(position, user, roomId))
		}else{
				console.log("Its not your turn man",
					this.props.game.players[0].name, "should make a move!!1")
		}
  },


  render: function() {
    return (
      <div className = 'main-containerX'>
				<TicTacToePlayers user={this.props.user} players = { this.props.game.players } />
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
                  onClick = { ()=>{this.markTile(i)} }>
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
  };
};

export default connect(mapStateToProps)(TicTacToe);
