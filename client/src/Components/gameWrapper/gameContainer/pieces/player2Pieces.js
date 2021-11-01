import './pieces.css'
import React from 'react'

function Player2Pieces (props) {

  return (
    <div className="player">
      <h1>Player 2</h1>
      <div className="pieces">
        <div className="s-piece"></div>
        <div className="m-piece"></div>
        <div className="l-piece"></div>
      </div>
    </div>
  )
}

export default Player2Pieces;