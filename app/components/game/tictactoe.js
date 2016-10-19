import React from 'react';
import { selectTile } from '../../actions/ticTacToe-actions';
import store from '../../store';

const TicTacToe = React.createClass({
  componentDidMount: function(){
    store.subscribe(()=> this.forceUpdate())
  },

  markTile: function(position){
    console.log(position)
    store.dispatch(selectTile(position, "X"))
  },

  render: function() {
    var board = store.getState().ticTacToe;

    return (
      <div className = 'main-containerX'>
        <div className = 'boardX'>
          {
            board.map((tile, i) =>{
              // console.log(tile)
                  return <div key={i} className='cellX' onClick={ ()=>{ this.markTile(i) } }>
                            {board[i]}
                         </div>
            })
          }
        </div>
      </div>
    );
  }
});

export default TicTacToe;
