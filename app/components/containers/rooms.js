import React from 'react';
import { connect } from 'react-redux';
import CreateRoomButton from '../views/create-room-button';
import RoomList from '../views/room-list';
import store from '../../store';
import GreetingsPanel from '../views/greetings-panel';
import { createNewRoom } from '../../actions/room-actions';

const Rooms = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>Game Rooms</h1>
        <div>
					{
						(this.props.session && this.props.session.user)
	            ? `Hello, ${this.props.session.user.name}`
	            : <GreetingsPanel/>
					}
        </div>
        <div>
          <CreateRoomButton
						createRoom= { this.props.createRoom }
						/>
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
    session: store.session
  };
};

function mapDispatchToProps(dispatch) {
  return { createRoom :
		function (name) {
			dispatch(createNewRoom(name))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Rooms);
