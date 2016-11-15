import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import TicTacToeScore from './tictactoe-score';
import SpectatorBoard from './spectatorBoard';

const Spectator = React.createClass({
  render: function() {
    return (
      <div className = 'main-containerX'>

				<TicTacToeScore
					players= { this.props.game.players }
					user= { this.props.user } />

				<SpectatorBoard
					board={ this.props.game.board }
					winner={ this.props.game.winner }
					players={ this.props.game.players }/>

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
