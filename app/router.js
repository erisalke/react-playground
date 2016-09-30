import React from 'react'
import { Route, Router, browserHistory, IndexRoute } from 'react-router'
import MainLayout from './components/layouts/main-layout.js'
import Home from './components/home.js'
import About from './components/views/about.js'

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);
