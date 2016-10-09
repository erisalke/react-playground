import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
// import CreateRoomButton from '../views/create-room-button'
// import RoomList from '../views/room-list';
// import store from '../../store';

const Room = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>A specific game room</h1>
        <Link to="/rooms">Go back</Link>
        <div>
          Enjoy the game
        </div>
      </div>
    );
  }
});


export default Room;
