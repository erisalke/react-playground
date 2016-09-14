import React from 'react';
import NavLink from './modules/NavLink.js';
import { IndexLink } from 'react-router';

export default React.createClass({
  render: function() {
    return(
      <div>
        <h1>React Playground menu</h1>
        <ul>
          <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});
