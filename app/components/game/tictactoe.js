import React from 'react';
import { connect } from 'react-redux';
import { selectTile, restartGame, addPlayerToGame, removePlayerFromGame }
  from '../../actions/ticTacToe-actions';
import { emitEvent } from '../../api/websockets';
import store from '../../store';

const TicTacToe = React.createClass({
  componentDidMount: function(){
		emitEvent('action', addPlayerToGame(this.props.user))
		store.dispatch(addPlayerToGame(this.props.user))
		//  { type: 'ADD_PLAYER', user: { id: 123, name: 'joe' } };

    console.log("IN TicTacToe ALREDY")
		// store.dispatch(updatePlayerList(user))
		// emitEvent('a player joins the game', {user: this.props.user, roomId: this.props.roomId })
// console.log("in the OX game, props:", this.props)
    // store.dispatch(userJoinsTheGame(this.props.user))
    // emitEvent('user joins the game', {user: this.props.user)
    // this.unsubscribe = store.subscribe(()=> this.forceUpdate())
  },

  componentWillUnmount: function() {
		emitEvent('action', removePlayerFromGame(this.props.user))
		store.dispatch(removePlayerFromGame(this.props.user))
    // store.dispatch(restartGame())
  },


  markTile: function(position){
		if (this.props.tictactoe.players[0].id === this.props.user.id){
			store.dispatch(selectTile({pos: position, userId: this.props.user.id}))
	    emitEvent('action', selectTile({pos: position, userId: this.props.user.id}))
		}else{
				console.log("Its not your turn man",
					this.props.tictactoe.players[0].name, "should make a move!!1")
		}
  },


  render: function() {
    return (
      <div className = 'main-containerX'>
        <div className = 'boardX'>
          {
            this.props.tictactoe.board.map((tile,i) => {
              var classVariant = ["cell"]
              if (i === 1 || i === 4 || i === 7) {
                classVariant.push("cellY")
              }
              if (i === 3 || i === 4 || i === 5) {
                classVariant.push("cellX")
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

const mapStateToProps = function(store) {
  return {
    tictactoe: store.ticTacToe,
    user: store.session.user,
		signs: store.session.signs,
  };
};

export default connect(mapStateToProps)(TicTacToe);
