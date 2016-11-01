import React from 'react';
import { Link } from 'react-router';
import Button from '../basic/button';
import { emitEvent } from '../../api/websockets';
import { updateChatSuccess } from '../../actions/chat-actions';
import store from '../../store';


const ChatInput = React.createClass({
  render: function(){
    return (
      <div>
        <input type="text" ref={text => {
          this.input = text;
        }} />
        <Button name="Send" onClick={
          () => {
						const user = this.props.user;
						const value = this.input.value;
						const roomId = this.props.roomId;

            store.dispatch(
							updateChatSuccess(user, value, roomId));
            emitEvent('action',
							updateChatSuccess(user, value, roomId));

            this.input.value = ''
          }
        }/>
      </div>
    )
}
})

export default ChatInput;
