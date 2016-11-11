import * as types from '../actions/action-types';

export function updateChatSuccess(user, msg, roomId) {
  return {
    type: types.UPDATE_CHAT_SUCCESS,
    user,
		msg,
		roomId
  };
};

export function flushChatMessages() {
  return {
    type: types.FLUSH_CHAT_MESSAGES,
  };
};

export function sendMessage(user, msg, roomId) {
	return dispatch => {
		dispatch( updateChatSuccess(user, msg, roomId) );
		emitEvent( 'action', updateChatSuccess(user, msg, roomId) );
	};
};
