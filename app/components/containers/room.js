import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import {emitEvent} from '../../api/websockets';
import store from '../../store';
import Chat from './chat';
import TicTacToe from '../game/tictactoe';
import { addUserToRoom } from '../../actions/room-actions';
import { flushChatMessages } from  '../../actions/chat-actions';


const Room = React.createClass({
  componentDidMount: function() {
		const user = this.props.user
		const roomId = this.props.params.roomId

		store.dispatch(addUserToRoom(user, roomId))
    emitEvent('action', addUserToRoom(user, roomId))
	},

  componentWillUnmount: function() {
    store.dispatch(flushChatMessages())
    emitEvent("user leaves room", {
      user: this.props.user,
      roomId: this.props.params.roomId
    })
  },

  name: function(){
    console.log("broken stuff here from room:",this)
//todo: shall be fixed
    return "name"
		// this.props.user.name || "something is wrong here..."
  },

  render: function() {
    return (
      <div className="home-page">
        <h1>{this.name()}</h1>
        <Link to="/rooms">Go back</Link>
        <div>
          Enjoy the game { this.props.user ? this.props.user.name : "refresh :("}
        </div>
        <div>
          <Chat />
          <TicTacToe roomId={this.props.params.roomId}/>
        </div>
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    user: store.session.user,
  };
};

export default connect(mapStateToProps)(Room);
