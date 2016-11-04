import React from 'react';
import CreateRoomButton from './create-room-button'
import { Link } from 'react-router';
import { emitEvent } from '../../api/websockets';

export default function(props) {
  return (
    <div>
      <h2>Available game rooms</h2>
      <ul className="list-group">

        {
          props.rooms.map(room => {

          return (
            <li key={room.id} className="list-group-item">
              <Link
                to={ "/room/"+room.id }
                className="details">
                  { room.name || room.id }
              </Link>
              <br/>
              <span> {room.id} </span>
            </li>
          );

        })}

      </ul>
    </div>
  );
}
