import * as types from '../actions/action-types';

const chat = (state = [], action) => {

  switch(action.type) {

    case types.UPDATE_CHAT_SUCCESS:
      return [...state, action.msg ];

    case types.FLUSH_CHAT_MESSAGES:
      return []; //remove all messages

    default:
      return state;
  }
}

export default chat;
