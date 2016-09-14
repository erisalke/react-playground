import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import App from './App';
import About from './modules/About';
import Repos from './modules/Repos';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App } >
      <Route path="/repos" component={ Repos }/>
      <Route path="/about" component={ About }/>
    </Route>
  </Router>,
  document.getElementById('root')
);
