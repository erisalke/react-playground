import { createStore, combineReducers } from 'redux';
import rooms from './reducers/rooms';
import chat from './reducers/chat';
import user from './reducers/user';

let rootReducer = combineReducers({
    rooms,
    chat,
    user
  })

let store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

export default store;
