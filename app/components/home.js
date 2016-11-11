import React from 'react';
import TicTacToe from './game/tictactoe';
import {emitEvent} from '../api/websockets'

const Home = React.createClass({
  render: function() {
    return (

      <div className="home-page">
        <h1>React-Redux Playground</h1>
        <p>
          Hey hello :)
				</p>
				<p>
					<button
          	type="button"
           	className="btn btn-default"
           	onClick={()=>emitEvent('HARD_RESET')}>
            	RESET
         </button>
			 </p>
      </div>
    );
  }
});

export default Home;
