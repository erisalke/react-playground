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
        <Button
					name="Create room"
					onClick={
	          () =>
							{
								this.props.createRoom(this.input.value)
								this.input.value = ''
	          	}
        	}
				/>
      </div>
    );
  }
});

export default CreateRoomButton;
