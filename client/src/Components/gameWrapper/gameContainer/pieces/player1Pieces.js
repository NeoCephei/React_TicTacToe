import './pieces.css'
import React, {useState}from 'react'

function Player1Pieces (props) {

  const [smallPieces, setSmallPieces] = useState(3);
  const [medium, setMediumPieces] = useState(3);
  const [largePieces, setLargePieces] = useState(3);

  return (
    <div className="player">
      <h1>Player 1</h1>
      <div className="pieces">
        <div className="s-piece"></div>
        <div className="m-piece"></div>
        <div className="l-piece"></div>
      </div>
    </div>
  )
}

export default Player1Pieces;