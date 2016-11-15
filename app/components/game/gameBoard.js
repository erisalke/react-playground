import React from 'react';

const GameBoard = (props) => {
	const tileSelected = (position) => {
		if (props.game.players[0].id === props.user.id
				&& props.game.players.length === 2
				&& ! props.game.board[position]
				&& ! (props.game.winner
					&& props.game.winner.hasOwnProperty('user'))) {
			props.selectTile(position, props.user)
		}
	}

	return (
		<div className = 'boardX'>
			{
				props.game.board.map((tile,i) => {
					var classVariant = ["cell"]

					if (i === 1 || i === 4 || i === 7) {
						classVariant.push("cellY")
					}
					if (i === 3 || i === 4 || i === 5) {
						classVariant.push("cellX")
					}

					// winning check
					if (props.game.winner &&
							props.game.winner.hasOwnProperty('user')){
						if (props.game.winner.line.some((lineElement) => lineElement===i)){
							if (props.game.winner.user.id === props.user.id){
									classVariant.push("greenCell")
							} else {
								classVariant.push("redCell")
							}
						}
					}

					return (
						<div
							key = { i }
							className = { classVariant.join(" ") }
							onClick = { () => { tileSelected(i) } }>
								{
									(tile === '')
										? ''
										: (tile === props.user.id)
												? props.signs.me
												: props.signs.opp
								}
						</div>
					)
				})
			}

		</div>
	)
}

export default GameBoard;
