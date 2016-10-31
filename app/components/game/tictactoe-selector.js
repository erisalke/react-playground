import React from 'react';
import { Link } from 'react-router';
import { setPlayersSigns } from '../../actions/session-actions';
import store from '../../store';

export default function (props) {
	const defClass = "btn btn-default"
	
  return (
    <div>

			<div className="btn-group">

				<button
					type = "button"
					className = {
						(props.me === "O") ? defClass + " active" : defClass
					}
					onClick = { () => {
						store.dispatch(setPlayersSigns( { me: "O", opp: "X" } ))
					}} > O </button>

				<button
				type = "button"
				className = {
					(props.me === "X") ? defClass + " active" : defClass
				}
					onClick = { () => {
						store.dispatch(setPlayersSigns( { me: "X", opp: "O" } ))
					}} > X </button>

			</div>
    </div>
    );
}
