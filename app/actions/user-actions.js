import * as types from '../actions/action-types';
import crypto from 'crypto';
import { emitEvent } from '../api/websockets';
import { setUserInternal } from './session-actions';


export function setUser(user) {
  return {
    type: types.SET_USER,
    user,
  };
};

export function handleLogin(name) {
	return dispatch => {
		var user = {
				id: crypto.randomBytes(24).toString('hex'),
				name: name || 'annonymus'
			};
		dispatch( setUserInternal(user) );
		dispatch( setUser(user) );
		emitEvent( 'action', setUser(user) );
	};
};
