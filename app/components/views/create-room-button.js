import React from 'react';
import Button from '../basic/button'
import store from '../../store';
import * as types from '../../actions/action-types';

const CreateRoomButton = React.createClass({

  createRoom: function() {
    store.dispatch({
      type: types.ADD_ROOM,
      name: "super pokoj"
    })
  },

  render: function() {
    return (
          <Button name="Create room" onClick={this.createRoom}/>
    );
  }
});

export default CreateRoomButton;
