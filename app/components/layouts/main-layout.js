import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  return (
    <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <Link to="/" activeClassName="active">Home</Link>
                </li>
                <li><Link to="/rooms" activeClassName="active">Rooms</Link></li>
                <li><Link to="/about" activeClassName="active">About</Link></li>
            </ul>
        </div>

        <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <main>
                          {props.children}
                        </main>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
