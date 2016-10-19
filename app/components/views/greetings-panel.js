import React from 'react';
import Button from '../basic/button';
import store from '../../store';
import { createRoom } from '../../api/room-api';
import { emitEvent } from '../../api/websockets';
import { setUserName } from '../../actions/user-actions';


const CreateRoomButton = React.createClass({
  render: function() {
    return (
      <div>
        <input ref={text => {
          this.input = text;
        }} />
        <Button name="Set name" onClick={
          () => {
            var name = this.input.value || 'annonymus'
            this.input.value = ''
            store.dispatch(setUserName(name))
            emitEvent('set user name', name)
          }
        }/>
      </div>
    );
  }
});

export default CreateRoomButton;
