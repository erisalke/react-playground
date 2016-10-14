import React from 'react';
import Button from '../basic/button'
import store from '../../store';
import { createRoom } from '../../api/room-api'
import { emitEvent } from '../../api/websockets';
import { createRoomSuccess } from '../../actions/room-actions'

const CreateRoomButton = React.createClass({
  render: function() {
    return (
      <div>
        <input ref={text => {
          this.input = text;
        }} />
        <Button name="Create room" onClick={
          () => {
            var room = {
              name: this.input.value || 'default name'
            }
            this.input.value = ''
            emitEvent('createroom', room)
          }
        }/>
      </div>
    );
  }
});

export default CreateRoomButton;
