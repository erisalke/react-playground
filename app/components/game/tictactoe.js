import React from 'react';
import { selectTile, restartGame } from '../../actions/ticTacToe-actions';
import { emitEvent } from '../../api/websockets';
import store from '../../store';

const TicTacToe = React.createClass({
  componentDidMount: function(){
    console.log("monuted")
    this.unsubscribe = store.subscribe(()=> this.forceUpdate())
  },

  componentWillUnmount: function(){
    console.log("unmonuted")
    restartGame()
    this.unsubscribe()
  },

  markTile: function(position){
    console.log("mark tile", position)
    store.dispatch(selectTile(position, "X"))
    emitEvent('tile selected', {pos:position})
  },

  render: function() {
    const state = store.getState().ticTacToe;

    return (
      <div className = 'main-containerX'>
        <div className = 'boardX'>
          {
            state.board.map((tile,i) => {
              return <div className="cellX" key={i} onClick={ ()=>{this.markTile(i)} }>{i}</div>
            })
          }

        </div>
      </div>
    );
  }
});

export default TicTacToe;
