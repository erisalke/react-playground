import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import About from './modules/About';
import Repos from './modules/Repos';
import Repo from './modules/Repo';
import Home from './modules/Home';

ReactDOM.render(
  <Router history={ browserHistory }>
    <Route path="/" component={ App } >
      <IndexRoute component={Home}/>
      <Route path="/repos" component={ Repos }>
        <Route path="/repos/:userName/:repoName" component={ Repo }/>
      </Route>
      <Route path="/about" component={ About }/>
    </Route>
  </Router>,
  document.getElementById('root')
);
