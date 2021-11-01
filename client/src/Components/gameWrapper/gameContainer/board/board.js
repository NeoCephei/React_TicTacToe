import './board.css'
import React, {useState} from 'react'

import Square from './square/square'

function Board (props) {

  const [board, setBoard] = useState([...Array(9).keys()])

  return (
    <div className="board">
      {board.map((square,index) => {
        return <Square key={index} squareValue={board[index]}/>
      })}
    </div>
  )
}

export default Board;