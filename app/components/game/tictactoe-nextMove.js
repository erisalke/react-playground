import React from 'react';

const nextMove = function(players) {
	const name = (players && players[0])
									? players[0].name
									: '';
	return "Next move: " + name;
};

const restartButton = function(restartGame) {
	return(
		<button onClick={ () => restartGame() } >
			restart game
		</button>
	)
};

export default function (props) {
  return (
		<div>
			{
				(props.winner && props.winner.user)
					? restartButton(props.restartGame)
					: nextMove(props.players)
			}
		</div>
	);
};
