import React from 'react';
import { connect } from 'react-redux';
import CreateRoomButton from '../views/create-room-button';
import RoomList from '../views/room-list';
import store from '../../store';
import GreetingsPanel from '../views/greetings-panel';

const Rooms = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>Game Rooms</h1>
        <div>
          { this.props.user.name
            ? `Hello, ${this.props.user.name}`
            : <GreetingsPanel/> }
        </div>
        <div>
          <CreateRoomButton />
        </div>
        <div>
          <RoomList rooms={ this.props.rooms } />
        </div>
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    rooms: store.rooms,
    user: store.user
  };
};

export default connect(mapStateToProps)(Rooms);
