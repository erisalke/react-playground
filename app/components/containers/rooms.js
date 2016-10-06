import React from 'react';
import { connect } from 'react-redux';
import CreateRoomButton from '../views/create-room-button'
import RoomList from '../views/room-list';
import store from '../../store';

const Rooms = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>Game Rooms</h1>
        <p>
          This is a list of available game roomsasdfasdfasdf
        </p>
        <p>
          <CreateRoomButton />
        </p>
        <p>
          <RoomList rooms={ this.props.rooms } />
        </p>
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    rooms: store.rooms
  };
};

export default connect(mapStateToProps)(Rooms);

//export default Rooms;
