import React from "react"
import { NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"
import {FaHome, FaBell, FaUser, FaPen} from "react-icons/fa"

const NavBar = () => {
  const navigate = useNavigate()
  return (
    <Navigation>
      <div className="item" onClick={()=> navigate("/")}>
        <FaHome  size={18} color="#0048b2"/>
        <p>Home</p>
      </div>

      <div className="item" onClick={()=> navigate("/appointment")}>
        <FaPen size={18} color="#0048b2"/>
        <p>Appointment</p>
      </div>

      <div className="item" onClick={()=> navigate("/notification")}>
        <FaBell  size={18} color="#0048b2"/>
        <p>Notification</p>
      </div>

      <div className="item" onClick={()=> navigate("/dashboard")}>
        <FaUser size={18} color="#0048b2"/>
        <p>profile</p>
      </div>
    </Navigation>
  )
}

const Navigation = styled.nav`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding: 18px 16px 12px;
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  right: 0;

/* position: absolute;
width: 375px;
height: 56px;
left: 0px;
top: 757px; */
  background: #FFFFFF;

  .item{
    display: grid;
    align-items: center;
    justify-content: center;
    align-content: center;
    justify-items: center;
    color: #0048b2;

    p{
      font-size: 10px;
    }
  }
`
export default NavBar
