import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import ChatBox from '../views/chat-box';
import ChatInput from '../views/chat-input';

const Chat = React.createClass({
  render: function() {
    return (
      <div>
        <h3>chat</h3>
        <ChatBox>{this.props.chat}</ChatBox>
        <ChatInput />
      </div>
    );
  }
});

const mapStateToProps = function(store) {
  return {
    chat: store.chat
  };
};

export default connect(mapStateToProps)(Chat);
