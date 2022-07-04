import React from 'react'
import { FaClock } from 'react-icons/fa'
import styled from 'styled-components'

function Notification() {
  const notifications = [
    {
      message: "Reminder: You have an Appointment tommorrow. Do not miss it.",
      type: 1,
      createdAt: "2mins ago"
    },
    {
      message: "Reminder: You have an Appointment tommorrow. Do not miss it.",
      type: 1,
      createdAt: "2mins ago"
    },
    {
      message: "Reminder: You have an Appointment tommorrow. Do not miss it.",
      type: 1,
      createdAt: "2mins ago"
    }
  ]
  return (
    <NotificationContainer>
      <h3>Notifications</h3>

      <div className="notifications">
        {
          notifications.map((n, i)=>{
            return(
              <div className="notification" key={i}>
              <FaClock size={40} color="#0048b2"/>
              <div className="texts">
                <p>{n.message}</p>
                <p className="time">{n.createdAt}</p>
              </div>
            </div>
            )
          })
        }
      </div>
    </NotificationContainer>
  )
}

const NotificationContainer = styled.div`
  padding: 10px;

  h3{
    color: #0048b2;
  }

  .notifications{
    display: grid;
    gap: 20px;
    align-items: center;
    padding: 10px 0;

    .notification{
      display: flex;
      gap: 10px;
      align-content: center;
      justify-content: center;

      .texts p{
        font-weight: 500;
        font-size: 14px;
      }

      .texts p.time{
        font-size: 10px;
        font-weight: 400;
        color: rgb(100,100,100);
      }
    }
  }
`

export default Notification