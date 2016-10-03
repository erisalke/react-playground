import { createStore } from 'redux';
import rooms from './reducers/rooms.js'

//const store = createStore(rooms);
let store = createStore(rooms, window.devToolsExtension && window.devToolsExtension());

export default store;
