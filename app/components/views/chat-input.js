import React from 'react';
import { Link } from 'react-router';
import Button from '../basic/button';
import { emitEvent } from '../../api/websockets';
import { updateChatSuccess } from '../../actions/chat-actions';
import store from '../../store';

export default React.createClass({
  render: function(){
    return (
      <div>
        <input type="text" ref={text => {
          this.input = text;
        }} />
        <Button name="Send" onClick={
          () => {
            store.dispatch(updateChatSuccess(this.input.value))
            emitEvent('new chat message', this.input.value)
            this.input.value = ''
          }
        }/>
      </div>
    )
}
})
