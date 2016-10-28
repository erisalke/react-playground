import React from 'react';
import Button from '../basic/button'
import store from '../../store';
import { createRoom } from '../../api/room-api'
import { emitEvent } from '../../api/websockets';
import { createRoomSuccess } from '../../actions/room-actions'
import crypto from 'crypto';

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
							id: crypto.randomBytes(24).toString('hex'),
              name: this.input.value || 'default name'
            }
            this.input.value = ''

						store.dispatch(createRoomSuccess(room))
						emitEvent('action', createRoomSuccess(room))
          }
        }/>
      </div>
    );
  }
});

export default CreateRoomButton;
