import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {emitEvent} from '../../api/websockets';
import store from '../../store';
import Chat from './chat';
import TicTacToe from '../game/tictactoe';
import TicTacToeSelector from '../game/tictactoe-selector';

import { addUserToRoom, removeUserFromRoom } from '../../actions/room-actions';
import { flushChatMessages } from  '../../actions/chat-actions';


const Room = React.createClass({
  componentDidMount: function() {
		const user = this.props.user
		const roomId = this.props.params.roomId

		store.dispatch(addUserToRoom(user, roomId))
    emitEvent('action', addUserToRoom(user, roomId))
	},

  componentWillUnmount: function() {
		const user = this.props.user
		const roomId = this.props.params.roomId
		
		store.dispatch(removeUserFromRoom(user, roomId))
    emitEvent('action', removeUserFromRoom(user, roomId))
		// removeUserFromRoom()

    // store.dispatch(flushChatMessages())
    // emitEvent("user leaves room", {
    //   user: this.props.session.user,
    //   roomId: this.props.params.roomId
    // })
  },

  render: function() {
    return (
      <div className="home-page">
        <h1>ROom name</h1>
        <Link to="/rooms">Go back</Link>
        <div>
          Enjoy the game ...
        </div>
        <div>
          <Chat />
					<TicTacToeSelector me = { this.props.me }/>
          <TicTacToe roomId={ this.props.params.roomId } />
        </div>
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
		// session:store.session,
    user: store.session.user,
		me: store.session.signs.me,
  };
};

export default connect(mapStateToProps)(Room);
