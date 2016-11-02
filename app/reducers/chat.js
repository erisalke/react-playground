import * as types from '../actions/action-types';

const chat = (state = [
	// {msg:"hi", user:{id,name}, }
], action) => {
  switch (action.type) {

    case types.UPDATE_CHAT_SUCCESS:
			return [
				...state,
				{ user: action.user, msg: action.msg }
			];

    case types.FLUSH_CHAT_MESSAGES:
      return []; // remove all messages

    default:
      return state;
  }
};

export default chat;
