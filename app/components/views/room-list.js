import React from 'react';
import CreateRoomButton from './create-room-button'
import { Link } from 'react-router';

export default function(props) {
  return (
    <div>
      <h2>room list</h2>
      <ul className="list-group">

        { props.rooms.map(room => {

          return (
            <li key={room.id} className="list-group-item">
              <Link to={ "/room/"+room.id } key={room.id} className="details">{room.name} - {room.id}</Link>
            </li>
          );

        })}

      </ul>
    </div>
  );
}
