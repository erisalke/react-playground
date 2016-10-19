import React from 'react';
import TicTacToe from './game/tictactoe';

const Home = React.createClass({
  render: function() {
    return (
      <div className="home-page">
        <h1>React-Redux Playground</h1>
        <p>
          Hey hello :)

        </p>
        <TicTacToe/>
      </div>
    );
  }
});

export default Home;
