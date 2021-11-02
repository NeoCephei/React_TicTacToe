import './square.css'
import React from 'react'

function Square (props) {
  const {squareValue, handleDragEnter, handleDragLeave} = props

  // console.log(squareValue)

  return (
    <div className="square">
      <div id={'dropzone'+squareValue}className="dropzone droppable"
      onDragEnter={(e) => {handleDragEnter(e)}}
      onDragLeave={(e) => {handleDragLeave(e)}}>Dropzone #{squareValue}</div>
    </div>
  )
}

export default Square;