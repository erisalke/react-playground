import * as types from '../actions/action-types';
import { combineReducers } from 'redux';
import rooms from './rooms';
import chat from './chat';
import users from './users';
import ticTacToe from './ticTacToe';
import session from './session';

const allCombined = combineReducers({
    rooms,
    chat,
    users,
    ticTacToe
  })

 // hack: add the reducer managing inernal state (session)
const clientReducer = combineReducers({
		rooms,
		chat,
		users,
		ticTacToe,
    session,
	})


const clientRoot = (state = {}, action) => {
 	switch (action.type) {
 		case types.INIT_STATE:
 			return Object.assign({}, action.state)

 		default:
 			return clientReducer(state, action);
 	}
 };

export { allCombined, clientRoot };
