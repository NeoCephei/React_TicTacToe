import './gameContainer.css'
import React, {useState, useRef} from 'react'
//Should have pieces and board
import Board from './board/board'
import Player1Pieces from './pieces/player1Pieces'
import Player2Pieces from './pieces/player2Pieces'

// import helpers from './../../../Helpers/helperFunctions'

function GameContainer (props) {


  let [level, counter] = useState(0)
  const board = [...Array(9).keys()];
  const [player1Pieces, setPlayer1Pieces] = useState({
    small: 3,
    medium: 3,
    large: 3
  });
  const [player2Pieces, setPlayer2Pieces] = useState({
    small: 3,
    medium: 3,
    large: 3
  });

  const dragItem = useRef();
  const dropZone = useRef();

  const handleDragStart = (e) => {
    dragItem.current = e.target;
    dragItem.current.addEventListener('dragend', handleDragEnd);
  }
  const handleDragEnter = (e) => {
    if (e.target.classList.contains('dropzone')) {
      dropZone.current = e;
    }
  }
  const handleDragLeave = (e) => {
    // console.log('drag leave trigger: ',e)
    dropZone.current = null;
    console.log(dropZone);
  }
  const handleDragEnd = (e) => {
    // console.log('onDragEnd: ', dragItem, dropZone);
    // console.log('onDragEnd: ', e);

    if (!dropZone.current || e.target.innerHTML.split('').includes('0')) {
      return;
    }
    const node = e.target.cloneNode(false);
    const pieceSize = node.id.slice(0, -1);
    const player = node.classList.contains('player1') ? 'player1' : 'player2';

    const available = checkAvailability(dropZone.current.target.children, pieceSize, player);

    if(!available) return;

    if (node.classList.contains('player1')){   
      const newSet = {...player1Pieces}
      newSet[pieceSize] -= 1;
      setPlayer1Pieces(newSet)
    } else if (node.classList.contains('player2')) {
      const newSet = {...player2Pieces}
      newSet[pieceSize] -= 1;
      setPlayer2Pieces(newSet)
    }

    node.draggable = false;
    dropZone.current.target.innerHTML = '';
    dropZone.current.target.innerHTML = node.outerHTML;
    dragItem.current.removeEventListener('dragend', handleDragEnd);
    dragItem.current = null;
    dropZone.current = null;
  }



  return (
    <div className="gameContainer">
      <Player1Pieces playerPieces={player1Pieces} handleDragStart={handleDragStart}/>
      <Board board={board} 
        handleDragEnter={handleDragEnter} 
        handleDragLeave={handleDragLeave}/>
      <Player2Pieces playerPieces={player2Pieces} handleDragStart={handleDragStart}/>
    </div>
  )
}

export default GameContainer;

function checkAvailability(nodeArray, size, player) {
  if (nodeArray.length === 0) return true;
  if(nodeArray[0].classList.contains(player)) return false;
  const nodeSize = nodeArray[0].id.slice(0, -1)
  if (nodeSize === size) return false;
  if (nodeSize === 'small' && (size === 'medium'|| size === 'large')) return true;
  if (nodeSize === 'medium' && size === 'large') return true;
}