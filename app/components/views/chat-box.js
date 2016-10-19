import React from 'react';
import { Link } from 'react-router';

export default function(props) {
  var i =0;
  return (
    <div>
      <ul>
        {
          props.children.map((el)=>{
            return <li key={i++}>{el.user}: {el.msg}</li>
          })
        }
      </ul>
    </div>
  );
}
