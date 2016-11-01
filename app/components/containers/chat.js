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
        <ChatBox messages={ this.props.chat }> </ChatBox>
				<ChatInput
					roomId = { this.props.roomId }
					user = { this.props.user || {id:666, name:"dummy"} }
					/>
      </div>
    );
  }
});

const mapStateToProps = function(store, ownProps) {
	const room = store.rooms.find(room => room.id === ownProps.roomId);
  return {
    chat: room.chat,
    user: store.session.user
  };
};

export default connect(mapStateToProps)(Chat);
