import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { clientRoot } from './reducers/root-reducer';
import thunk from 'redux-thunk'

let store = createStore(
	clientRoot,
	composeWithDevTools(
    applyMiddleware(thunk)
	)
);

export default store;
