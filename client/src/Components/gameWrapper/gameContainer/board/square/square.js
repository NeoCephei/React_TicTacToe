import './square.css'
import React from 'react'

function Square (props) {
  const {squareValue} = props

  return (
    <div className="square">
      <div className="dropzone">Dropzone #{squareValue}</div>
    </div>
  )
}

export default Square;