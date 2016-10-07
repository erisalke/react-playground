import React from 'react';
import Button from '../basic/button'
import store from '../../store';
import * as types from '../../actions/action-types';
import { createRoom } from '../../api/room-api'

const CreateRoomButton = React.createClass({
  i: 0,
  create: function() {
    var room = {
      id: this.i++,
      name: "pokoj_"
    }
    createRoom(room)
  },

  render: function() {
    return (
      <Button name="Create room" onClick={this.create}/>
    );
  }
});

export default CreateRoomButton;
