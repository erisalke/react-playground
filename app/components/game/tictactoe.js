import React from 'react';
import { connect } from 'react-redux';
import { selectTile, restartGame, userJoinsTheGame }
  from '../../actions/ticTacToe-actions';
import { emitEvent } from '../../api/websockets';
import store from '../../store';

const TicTacToe = React.createClass({
  componentDidMount: function(){
    console.log("monuted")
    // store.dispatch(userJoinsTheGame(this.props.user))
    // emitEvent('user joins the game', this.props.user)
    // this.unsubscribe = store.subscribe(()=> this.forceUpdate())
  },

  componentWillUnmount: function(){
    console.log("unmonuted")
    store.dispatch(restartGame())
    // this.unsubscribe()
  },

  markTile: function(position){
    console.log("mark tile", position)
    store.dispatch(selectTile(position, "X"))
    emitEvent('tile selected', {pos:position})
  },

  render: function() {
    // const state = store.getState().ticTacToe;

    return (
      <div className = 'main-containerX'>
        <div className = 'boardX'>
          {
            this.props.tictactoe.board.map((tile,i) => {
              return (
                <div
                  key={i}
                  className="cellX"
                  onClick={ ()=>{this.markTile(i)} }>
                    {tile}
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
  console.log("THE STORE:",store)
  return {
    tictactoe: store.ticTacToe,
    user: store.user,
  };
};

export default connect(mapStateToProps)(TicTacToe);
