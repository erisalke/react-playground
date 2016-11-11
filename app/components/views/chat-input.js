import React from 'react';
import InputWithButton from '../basic/inputWithButton';

export default function(props) {
	return (
		<InputWithButton
			name= "Send"
			onClick= { props.handleSendMsg }
			/>
		);
};
