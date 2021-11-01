import './gameWrapper.css'
import React from 'react'

import Notifications from './notifications/notifications'
import GameContainer from './gameContainer/gameContainer'

function GameWrapper (props) {

  return (
    <div className="gameWrapper">
      <Notifications/>
      <GameContainer/>
    </div>
  )
}

export default GameWrapper;