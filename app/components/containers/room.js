import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Chat from './chat';
import {emitEvent} from '../../api/websockets';
import store from '../../store';
import { flushChatMessages } from  '../../actions/chat-actions';
import TicTacToe from '../game/tictactoe';


const Room = React.createClass({
  componentDidMount: function() {
    emitEvent("user enters room", {
      user: this.props.user,
      roomId: this.props.params.roomId
    })
  },

  componentWillUnmount: function() {
    store.dispatch(flushChatMessages())
    emitEvent("user leaves room", {
      user: this.props.user,
      roomId: this.props.params.roomId
    })
  },

  name: function(){
    console.log("from room:",this)
//todo: shall be fixed
    return this.props.user.name || "something is wrong here..."
  },

  render: function() {
    return (
      <div className="home-page">
        <h1>{this.name()}</h1>
        <Link to="/rooms">Go back</Link>
        <div>
          Enjoy the game
        </div>
        <div>
          <Chat />
          <TicTacToe />
        </div>
      </div>
    );
  }
});


const mapStateToProps = function(store) {
  console.log("state to props mapped")
  return {
    // rooms: store.rooms,
    user: store.user
  };
};

export default connect(mapStateToProps)(Room);
