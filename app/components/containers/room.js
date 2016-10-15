import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Chat from './chat';
import {emitEvent} from '../../api/websockets'

const Room = React.createClass({
  componentDidMount: function() {
    emitEvent("user enters room", this.props.params.roomId)
  },

  componentWillUnmount: function() {
    emitEvent("user leaves room", this.props.params.roomId)
  },

  render: function() {
    return (
      <div className="home-page">
        <h1>A specific game room</h1>
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
