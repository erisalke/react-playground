import React from 'react';
import { connect } from 'react-redux';
import {
	selectTile,
	restartGame,
} from '../../actions/tictactoe-actions';
import TicTacToeScore from './tictactoe-score';
import TicTacToeSelector from './tictactoe-selector';
import TicTacToeNextMove from './tictactoe-nextMove';
import { emitEvent } from '../../api/websockets';
import store from '../../store';

import GameBoard from './gameBoard';

const TicTacToe = React.createClass({
  render: function() {
    return (
      <div className = 'main-containerX'>

				<TicTacToeSelector
					me={ this.props.signs.me } />

				<TicTacToeNextMove
					winner= { this.props.game.winner }
					players= { this.props.game.players }
					restartGame= { this.props.restartGame } />

				<TicTacToeScore
					players= { this.props.game.players }
					user= { this.props.user } />

				<GameBoard
					game= { this.props.game }
					user= { this.props.user }
					signs= { this.props.signs }
					selectTile= { this.props.selectTile } />

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
  return {
		restartGame : () => {
			dispatch(restartGame( ownProps.roomId ))
		},
		selectTile : (position, user) => {
			dispatch(selectTile( position, user, ownProps.roomId ))
		},
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);
