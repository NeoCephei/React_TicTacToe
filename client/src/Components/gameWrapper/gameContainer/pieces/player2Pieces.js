import './pieces.css'
import React from 'react'

function Player2Pieces (props) {

  const {playerPieces} = props;
  const {small,medium,large} = playerPieces

  return (
    <div className="player">
      <h1>Player 2</h1>
      <div className="pieces">
        <div>
          <div draggable id="small2" className="piece s-piece player2" 
            onDragStart={(e) => {props.handleDragStart(e)}}>x {small}</div>
        </div>
        <div>
          <div draggable id="medium2" className="piece m-piece player2" 
            onDragStart={(e) => {props.handleDragStart(e)}}>x {medium}</div>
        </div>
        <div>
          <div draggable id="large2" className="piece l-piece player2"
            onDragStart={(e) => {props.handleDragStart(e)}}>x {large}</div>
        </div>
      </div>
    </div>
  )
}

export default Player2Pieces;