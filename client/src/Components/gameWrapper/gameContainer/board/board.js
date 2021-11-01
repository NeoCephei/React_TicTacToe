import './board.css'
import React from 'react'

import Square from './square/square'

function Board (props) {

  const {board, handleDragEnter} = props;

  return (
    <div className="board">
      {board.map((square,index) => {
        return <Square key={index} squareValue={board[index]} handleDragEnter={handleDragEnter}/>
      })}
    </div>
  )
}

export default Board;