import * as types from '../actions/action-types';

const chat = (state = [], action) => {

  switch(action.type) {

    case types.UPDATE_CHAT_SUCCESS:
      const newState = [...state, action.msg ];
      return newState;

    default:
      return state;
  }
}

export default chat;
