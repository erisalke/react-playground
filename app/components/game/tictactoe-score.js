import React from 'react';
import _ from 'lodash';

const TictactoeScore = function (props) {
	const sortedPlayers = _.sortBy(props.players, [( o => name )]);
  return (
			<div>Scores:
				{
					sortedPlayers.map((player, i) =>{
						return (<PlayerNameScore key={i} player={ player } me={ props.user } />)
					})
				}
			</div>
    );
}

const PlayerNameScore = (props) => {
	if (props.player.id === props.me.id) {
		return( <div><b>{props.player.name}: {props.player.score}</b></div> )
	} else {
		return( <div>{props.player.name}: {props.player.score}</div> )
	}
}

export default TictactoeScore;
