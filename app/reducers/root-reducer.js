import * as types from '../actions/action-types';
import { combineReducers } from 'redux';
import rooms from './rooms';
import chat from './chat';
import users from './users';
import session from './session';
import tictactoe from './game/tictactoe';

const allCombined = combineReducers({
    rooms,
    users,
  })

 // hack: add the reducer managing inernal state (session)
const clientReducer = combineReducers({
		rooms,
		users,
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
