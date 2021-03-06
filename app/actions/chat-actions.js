import * as types from '../actions/action-types';
import { emitEvent } from '../api/websockets';

export function updateChatSuccess(user, msg, roomId) {
  return {
    type: types.UPDATE_CHAT,
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
