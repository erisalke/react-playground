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
    this.unsubscribe = store.subscribe(()=> this.forceUpdate())
    emitEvent("user enters room", this.props.params.roomId)
  },

  componentWillUnmount: function() {
    this.unsubscribe();
    store.dispatch(flushChatMessages())
    emitEvent("user leaves room", this.props.params.roomId)
  },

  name: function(){
    return this.props.params.name || "something is wrong here..."
  },

  render: function() {
    const state = store.getState().rooms.find(
      (r) => r.id === this.props.params.roomId
    )

console.log(state)
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

export default Room;
