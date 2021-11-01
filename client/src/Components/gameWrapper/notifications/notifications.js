import './notifications.css'
import React, {useState} from 'react'

function Notifications (props) {
  const [notification, setNotifications] = useState('Hello from notifications');

  return (
    <div className="notifications">
      {notification}
    </div>
  )
}

export default Notifications;