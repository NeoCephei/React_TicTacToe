import './gameContainer.css'
import React from 'react'
//Should have pieces and board
import Board from './board/board'
import Player1Pieces from './pieces/player1Pieces'
import Player2Pieces from './pieces/player2Pieces'

function GameContainer (props) {

  return (
    <div className="gameContainer">
      <Player1Pieces />
      <Board />
      <Player2Pieces />
    </div>
  )
}

export default GameContainer;