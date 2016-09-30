import { createStore } from 'redux';
import todo from './reducers/todo.js'

const store = createStore(todo);
export default store;
