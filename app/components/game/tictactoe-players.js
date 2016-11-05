import React from 'react';
import { Link } from 'react-router';
import { setPlayersSigns } from '../../actions/session-actions';
import store from '../../store';

const name = function(props) {
	const name = (props.players && props.players[0])
									? props.players[0].name
									: 'nic'

	return "Next move: " + name
}

export default function (props) {
	const defClass = "btn btn-default"

  return (
		<div>
			<div>
				{
					name(props)
				}
			</div>

		</div>
    );
}
