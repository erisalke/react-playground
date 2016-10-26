import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import MainLayout from './components/layouts/main-layout';
import Home from './components/home';
import About from './components/containers/about';
import Rooms from './components/containers/rooms';
import Room from './components/containers/room';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/room/:roomId" component={Room} />
      <Route path="/about" component={About} />
    </Route>
  </Router>
);
