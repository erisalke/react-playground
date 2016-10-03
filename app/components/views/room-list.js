import React from 'react';
import CreateRoomButton from './create-room-button'

export default function(props) {
  return (
    <div>
      <h2>room list</h2>
      <ul className="list-group">

        {props.rooms.map(room => {

          return (
            <li key={room.id} className="list-group-item">
              <div className="details">{room.name}</div>
            </li>
          );

        })}

      </ul>
    </div>
  );
}
