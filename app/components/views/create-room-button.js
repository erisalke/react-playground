import React from 'react';
import Button from '../basic/button'
import store from '../../store';
import { createRoom } from '../../api/room-api'
import { emitEvent } from '../../api/websockets';
import { createRoomSuccess } from '../../actions/room-actions'

const CreateRoomButton = React.createClass({
  create: function() {
    var room = {
      name: "generic room name"
    }

    emitEvent('createroom', room)
    // store.dispatch(createRoomSuccess(room))
  },

  render: function() {
    return (
      <Button name="Create room" onClick={this.create}/>
    );
  }
});

export default CreateRoomButton;
