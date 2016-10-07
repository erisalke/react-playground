import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import router from './router';
import store from './store';
import { initSocket, emitEvent } from './api/websockets'

ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);

initSocket();
