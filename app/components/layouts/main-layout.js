import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="app">
      <header className="primary-header"></header>
      <aside className="primary-aside">
        <ul>
          <li><Link to="/" activeClassName="active">Home</Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
        </ul>
      </aside>
      <main>
        {props.children}
      </main>
    </div>
    );
}
