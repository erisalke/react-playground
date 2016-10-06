import axios from 'axios';
import store from '../store';
import { getRoomsSuccess, createRoomSuccess } from '../actions/room-actions';

export function getRooms() {
  return axios.get('http://localhost:3001/api/rooms')
    .then(response => {
      store.dispatch(getRoomsSuccess(response.data));
      return response;
    });
}

export function createRoom(room) {
  return axios.post('http://localhost:3001/api/rooms', room)
    .then(response => {
      store.dispatch(createRoomSuccess(response.data));
      return response;
    });
}
