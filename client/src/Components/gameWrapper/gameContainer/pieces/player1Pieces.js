import './pieces.css'
import React from 'react'

function Player1Pieces (props) {

  const {playerPieces, handleDragStart, turn} = props;
  const {small,medium,large} = playerPieces

  return (
    <div className="player">
      <h1>Player 1</h1>
      <div className="pieces">
        <div>
          <div draggable={turn ? 'false' : 'true'} id="small1" className="piece s-piece player1" 
            onDragStart={(e) => {handleDragStart(e)}}>x {small}</div>
        </div>
        <div>
          <div draggable={turn ? 'false' : 'true'} id="medium1" className="piece m-piece player1" 
            onDragStart={(e) => {handleDragStart(e)}}>x {medium}</div>
        </div>
        <div>
          <div draggable={turn ? 'false' : 'true'} id="large1" className="piece l-piece player1"
            onDragStart={(e) => {handleDragStart(e)}}>x {large}</div>
        </div>
      </div>
    </div>
  )
}

export default Player1Pieces;