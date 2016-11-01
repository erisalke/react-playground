import React from 'react';
import { Link } from 'react-router';


export default function(props) {
  var i = 0;

  return (
    <div>
      <ul>
				{
					props.messages.map( msg => {
						return (
							<li key={ i++ }>
								<b>{ msg.user.name }</b>: { msg.msg }
							</li>
						)
					})
				}
      </ul>
    </div>
  );
}
