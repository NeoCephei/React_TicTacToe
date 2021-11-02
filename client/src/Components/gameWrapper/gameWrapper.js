import './gameWrapper.css'
import React, {useState} from 'react'

import Notifications from './notifications/notifications'
import GameContainer from './gameContainer/gameContainer'

function GameWrapper (props) {

  const [game, setGame] = useState(true)
  const [turn, setTurn] = useState(true)
  const [board, setBoard] = useState([...Array(9).keys()]);
  const [notification, setNotifications] = useState('In the meantime player1 always start');
  
  const updateBoard = (index) => {
    const player = turn ? 'Player 1' : 'Player 2';
    const newArray =[...board];
    newArray[index*1] = player;
    setBoard(newArray)
    
    if(checkWinCondition(newArray)) {
      // console.log('Winner!')
      setGame(!game);
      setNotifications(`${player} Won!!`)
    } else {
      // console.log('Keep Playing')
      changeTurn(turn ? 'Player 2' : 'Player 1')
    }
  }
  
  const changeTurn = (player) => {
    setTurn(!turn)
    setNotifications(`${player} turns`)
  }

  return (
    <div className="gameWrapper">
      <Notifications notification={notification}/>
      <GameContainer turn={turn} board={board} updateBoard={updateBoard}/>
    </div>
  )
}

export default GameWrapper;

function checkWinCondition (board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }
  return false;
}