import React from 'react';
import Button from '../basic/button'
import store from '../../store';
import * as types from '../../actions/action-types';
import { createRoom } from '../../api/room-api'
import {emitEvent} from '../../api/websockets';

const CreateRoomButton = React.createClass({
  create: function() {
    var room = {
      name: "pokoj_"
    }
    //createRoom(room)
    emitEvent('CREATE_ROOM', room)
  },

  render: function() {
    return (
      <Button name="Create room" onClick={this.create}/>
    );
  }
});

export default CreateRoomButton;
