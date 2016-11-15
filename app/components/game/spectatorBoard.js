import React from 'react';
import _ from 'lodash';

const TicTacToeBoard = (props) => {
	const sortedPlayers = _.sortBy(props.players, [ o => o.name ]);

	return (
		<div className = 'boardX'>
		{
			props.board.map((tile,i) => {
				var classVariant = ["cell"]
				if (i === 1 || i === 4 || i === 7) {
					classVariant.push("cellY")
				}
				if (i === 3 || i === 4 || i === 5) {
					classVariant.push("cellX")
				}

				// winning check
				if (props.winner &&
						props.winner.hasOwnProperty('user')){
					if (props.winner.line.some((lineElement) => lineElement===i)){
						classVariant.push("yellowCell")
					}
				}

				return (
					<div
						key = { i }
						className = { classVariant.join(" ") } >
							{
								(tile === '')
									? ''
									: (tile === sortedPlayers[0].id)
											? "O"
											: "X"
							}
					</div>
				)
			})
		}
		</div>
	);
}

export default TicTacToeBoard;
