import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Chat from './chat';
import {emitEvent} from '../../api/websockets';
import store from '../../store';
import { flushChatMessages } from  '../../actions/chat-actions';

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

  render: function() {
    const state = store.getState().rooms.find(
      (r) => r.id === this.props.params.roomId
    )

    return (
      <div className="home-page">
        <h1>{state.name}</h1>
        <Link to="/rooms">Go back</Link>
        <div>
          Enjoy the game
        </div>
        <div>
          <Chat />
        </div>
      </div>
    );
  }
});

export default Room;
