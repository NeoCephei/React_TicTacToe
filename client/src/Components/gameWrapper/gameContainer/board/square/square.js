import './square.css'
import React from 'react'

function Square (props) {
  const {squareValue, handleDragEnter} = props

  return (
    <div className="square">
      <div id={'dropzone'+squareValue}className="dropzone droppable"
      onDragEnter={(e) => {handleDragEnter(e)}}
      >Dropzone #{squareValue}</div>
    </div>
  )
}

export default Square;