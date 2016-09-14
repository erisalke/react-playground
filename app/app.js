import React from 'react';
import { Link } from 'react-router'

export default React.createClass({
  render: function() {
    return(
      <div>
        <h1>React Playground menu</h1>
        <ul>
          <li><Link to="/about" activeClassName="active">About</Link></li>
          <li><Link to="/repos" activeClassName="active">Repos</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
});
