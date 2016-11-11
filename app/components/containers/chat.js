import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import ChatBox from '../views/chat-box';
import ChatInput from '../views/chat-input';
import { sendMessage } from '../../actions/chat-actions';


const Chat = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Chat</h3>
        <ChatBox messages={ this.props.chat } />
				<ChatInput
					sendMessage= { (msg) =>
						this.props.sendMessage(msg)
					}
					/>
      </div>
    );
  }
});

const mapDispatchToProps = function(dispatch) {
	return {
		sendMessage :
			function (msg) {
				dispatch(sendMessage(this.props.user, msg, this.props.roomId));
			}
	}
};

const mapStateToProps = function(store, ownProps) {
	const room = store.rooms.find(room => room.id === ownProps.roomId);
  return {
    chat: room.chat,
    user: store.session.user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
