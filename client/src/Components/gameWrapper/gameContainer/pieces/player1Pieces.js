import './pieces.css'
import React, {useState}from 'react'

function Player1Pieces (props) {

  const [smallPieces, setSmallPieces] = useState(3);
  const [mediumPieces, setMediumPieces] = useState(3);
  const [largePieces, setLargePieces] = useState(3);

  return (
    <div className="player">
      <h1>Player 1</h1>
      <div className="pieces">
        <div>
          <div className="piece s-piece">x {smallPieces}</div>
        </div>
        <div>
          <div className="piece m-piece">x {mediumPieces}</div>
        </div>
        <div>
          <div className="piece l-piece">x {largePieces}</div>
        </div>
      </div>
    </div>
  )
}

export default Player1Pieces;