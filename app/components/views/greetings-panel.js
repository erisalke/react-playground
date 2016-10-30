import React from 'react';
import Button from '../basic/button';
import store from '../../store';
import { createRoom } from '../../api/room-api';
import { emitEvent } from '../../api/websockets';
import { setUser } from '../../actions/user-actions';
import { setUserInternal } from '../../actions/session-actions';
import crypto from 'crypto'

const CreateRoomButton = React.createClass({
  render: function() {
    return (
      <div>
        <input ref={text => {
          this.input = text;
        }} />

        <Button name="Login" onClick={
          () => {
            var user = {
							id: crypto.randomBytes(24).toString('hex'),
							name: this.input.value || 'annonymus'
						}
            this.input.value = ''

						store.dispatch(setUserInternal(user));
            store.dispatch(setUser(user));
						emitEvent('action', setUser(user));
          }
        }/>
      </div>
    );
  }
});

export default CreateRoomButton;
