import { createStore, combineReducers } from 'redux';
import rooms from './reducers/rooms';
import chat from './reducers/chat';

let rootReducer = combineReducers({
    rooms,
    chat
  })

let store = createStore(rootReducer, window.devToolsExtension && window.devToolsExtension());

export default store;
