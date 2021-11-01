import './navbar.css'
import React from 'react'

function Navbar (props) {

  return (
    <div className="navbar">
      <h1>TicTacToe</h1>
      <div className="navbar-pages">
        <p>Stats</p>
        <p>How to play?</p>
      </div>
    </div>
  )
}

export default Navbar;