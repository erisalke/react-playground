import * as types from '../actions/action-types';

export function updateChatSuccess(msg) {
  return {
    type: types.UPDATE_CHAT_SUCCESS,
    msg
  };
}
