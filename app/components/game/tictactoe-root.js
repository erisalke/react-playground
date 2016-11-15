import React from 'react';
import { connect } from 'react-redux';
import {
	selectTile,
	restartGame,
	addPlayerToGame,
	removePlayerFromGame,
} from '../../actions/tictactoe-actions';
import Spectator from './spectator';
import TicTacToe from './tictactoe';
import TicTacToeScore from './tictactoe-score';
import TicTacToeSelector from './tictactoe-selector';
import TicTacToeNextMove from './tictactoe-nextMove';
import { emitEvent } from '../../api/websockets';
import store from '../../store';

const TicTacToeRoot = React.createClass({

  componentDidMount: function() {
		const roomId = this.props.roomId;
		const user = this.props.user;
		emitEvent('action', addPlayerToGame(user, roomId))
		store.dispatch(addPlayerToGame(user, roomId))
  },

  componentWillUnmount: function() {
		const roomId = this.props.roomId;
		const player = this.props.players.find(
			player => player.id === this.props.user.id
		);
		if (player) {
			emitEvent('action', removePlayerFromGame(player, roomId))
			store.dispatch(removePlayerFromGame(player, roomId))
		};
  },

	isPlaying: function () {
		return this.props.players.some(
			player => player.id === this.props.user.id )
	},

  render: function() {
    return (
			this.isPlaying()
				? <TicTacToe roomId = {this.props.roomId} />
				: <Spectator roomId = {this.props.roomId} />
			)
  }
});

const mapStateToProps = function(store, ownProps) {
	const room = store.rooms.find(room => room.id === ownProps.roomId);
  return {
    players: room.game.players,
    user: store.session.user,
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

export default connect(mapStateToProps, mapDispatchToProps)(TicTacToeRoot);
