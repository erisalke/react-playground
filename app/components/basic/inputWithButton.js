import React from 'react';
import Button from './button';


export default function (props) {
	console.log(props);
	var input;

  return (
		<div>

			<input ref={text => {
				input = text;
			}} />

			<Button
				name={ props.buttonName }
				onClick={ () => {
					props.onClick(input.value)
					input.value = ''
				}}
				/>

		</div>
  );
}
