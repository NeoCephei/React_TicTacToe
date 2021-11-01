import './square.css'
import React from 'react'

function Square (props) {
  const {squareValue} = props

  return (
    <div className="square">
      {squareValue}
    </div>
  )
}

export default Square;