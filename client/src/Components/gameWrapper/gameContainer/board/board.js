import './board.css'
import React from 'react'

import Square from './square/square'

function Board (props) {

  const {board, handleDragEnter, handleDragLeave} = props;

  const aux = [...Array(9).keys()]

  return (
    <div className="board" onDragLeave={(e) => {handleDragLeave(e)}}>
      {board.map((el,index) => {
        //  return <Square key={index} squareValue={board[index]} handleDragEnter={handleDragEnter} handleDragLeave={handleDragLeave}/>
        return <Square key={index} squareValue={aux[index]} handleDragEnter={handleDragEnter} handleDragLeave={handleDragLeave}/>
      })}
    </div>
  )
}

export default Board;