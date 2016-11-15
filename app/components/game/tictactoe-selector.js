import React from 'react';
import { Link } from 'react-router';
import { setPlayersSigns } from '../../actions/session-actions';
import store from '../../store';

export default function (props) {
	var xClass = "btn btn-default"
	var oClass = "btn btn-default"
 	if (props.me === "O"){
		oClass += " active"
	} else {
		xClass += " active"
	}

  return (
    <div>
			<div className="btn-group">

				<button
					type = "button"
					className = { oClass }
					onClick = { () => {
						store.dispatch(setPlayersSigns( { me: "O", opp: "X" } ))
					}} > O </button>

				<button
					type = "button"
					className = { xClass }
					onClick = { () => {
						store.dispatch(setPlayersSigns( { me: "X", opp: "O" } ))
					}} > X </button>

			</div>
    </div>
    );
}
