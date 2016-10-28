import * as types from '../actions/action-types';
import { combineReducers } from 'redux';
import rooms from './rooms';
import chat from './chat';
import user from './user';
import ticTacToe from './ticTacToe';

const allCombined = combineReducers({
    rooms,
    chat,
    user,
    ticTacToe
  })

const clientRoot = (state = {}, action) => {
 	switch (action.type) {
 		case types.INIT_STATE:
 			return Object.assign({}, action.state)

 		default:
 			return allCombined(state, action);
 	}
 };

export { allCombined, clientRoot };
