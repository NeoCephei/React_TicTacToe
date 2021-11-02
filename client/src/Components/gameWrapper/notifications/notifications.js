import './notifications.css'
import React from 'react'

function Notifications (props) {
  const {notification} = props

  return (
    <div className="notifications">
      {notification}
    </div>
  )
}

export default Notifications;