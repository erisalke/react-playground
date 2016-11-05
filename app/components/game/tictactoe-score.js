import React from 'react';
import _ from 'lodash';


const tictactoeScore = function (props) {
	const sortedPlayers = _.sortBy(props.players, [function(o) { return o.name; }]);
  return (
		<div>
			<div>Scores:
				{
					sortedPlayers.map(player =>{
						if (player.id === props.user.id) {
							return(
								<div>
									<b>
										{player.name}: {player.score}
									</b>
								</div>
							)
						}
						return(
							<div>
								{player.name}: {player.score}
							</div>
						)
					})
				}
			</div>

		</div>
    );
}

export default tictactoeScore;
