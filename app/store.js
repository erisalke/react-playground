import { createStore } from 'redux';
import { clientRoot } from './reducers/root-reducer';

let store = createStore(
	clientRoot,
	window.devToolsExtension && window.devToolsExtension()
);

export default store;
