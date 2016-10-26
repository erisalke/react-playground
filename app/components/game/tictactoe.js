import React from 'react';
import { connect } from 'react-redux';
import { selectTile, restartGame, userJoinsTheGame }
  from '../../actions/ticTacToe-actions';
import { emitEvent } from '../../api/websockets';
import store from '../../store';

const TicTacToe = React.createClass({
  componentDidMount: function() {
    console.log("monuted")
    // store.dispatch(userJoinsTheGame(this.props.user))
    // emitEvent('user joins the game', this.props.user)
    // this.unsubscribe = store.subscribe(()=> this.forceUpdate())
  },

  componentWillUnmount: function() {
    console.log("unmonuted")
    store.dispatch(restartGame())
    // this.unsubscribe()
  },

  markTile: function(position){
    console.log("mark tile", position)
    store.dispatch(selectTile({pos: position, userId: this.props.user.id}))
    emitEvent('tile selected', {pos: position, userId: this.props.user.id})
  },


  render: function() {
    // const state = store.getState().ticTacToe;
console.log(this.props)
    return (
      <div>
        <div>
          nextTurn: {this.props.tictactoe.nextTurn }
          <br/>
          myId: {this.props.user.id }
        </div>
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
                    key={i}
                    className={classVariant.join(" ")}
                    onClick={ ()=>{this.markTile(i)} }>
                      {tile}
                  </div>
                )
              })
            }

          </div>
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
