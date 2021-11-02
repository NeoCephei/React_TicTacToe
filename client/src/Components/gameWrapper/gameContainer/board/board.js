import './board.css'
import React from 'react'

import Square from './square/square'

function Board (props) {

  const {board, handleDragEnter, handleDragLeave} = props;

  return (
    <div className="board" onDragLeave={(e) => {handleDragLeave(e)}}>
      {board.map((el,index) => {
        //  return <Square key={index} squareValue={board[index]} handleDragEnter={handleDragEnter} handleDragLeave={handleDragLeave}/>
        return <Square key={index} squareValue={board[index]} handleDragEnter={handleDragEnter} handleDragLeave={handleDragLeave}/>
      })}
    </div>
  )
}

export default Board;