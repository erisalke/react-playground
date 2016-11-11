import React from 'react';
import InputWithButton from '../basic/InputWithButton';

export default function(props) {
	return (
		<InputWithButton
			buttonName="Create room"
			onClick={ props.createRoom }
			/>
	);
}
