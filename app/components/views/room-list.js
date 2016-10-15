import React from 'react';
import CreateRoomButton from './create-room-button'
import { Link } from 'react-router';
import { emitEvent } from '../../api/websockets';

// const deleteRoom =

export default function(props) {
  return (
    <div>
      <h2>room list</h2>
      <ul className="list-group">


        {
          // console.log(props),
           props.rooms.map(room => {

          return (
            <li key={room.id} className="list-group-item">
              <Link
                to={ "/room/"+room.id }
                key={room.id}
                className="details">
                  {room.id}
              </Link>
              <br/>
              <span> {room.name} </span>
            </li>
          );

        })}

      </ul>
    </div>
  );
}
