import * as types from '../actions/action-types';

export function updateChatSuccess(msg, user) {
  return {
    type: types.UPDATE_CHAT_SUCCESS,
    msg,
    user
  };
}

export function flushChatMessages() {
  return {
    type: types.FLUSH_CHAT_MESSAGES,
  };
}
