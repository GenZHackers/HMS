import React, { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"
import {FaHome, FaBell, FaUser, FaPen} from "react-icons/fa"
import { HiBell, HiHome, HiOutlineBell, HiOutlineHome, HiOutlinePencil, HiOutlineUser, HiPencil, HiUser } from "react-icons/hi"

const NavBar = () => {
  const navigate = useNavigate()
  const [active, setActive] = useState(0)

  const navItems = [
    {
      title: "Home",
      icon: <HiHome  size={24} color="#0048b2"/>,
      outline: <HiOutlineHome  size={24} color="#0048b2"/>,
      link: "/"
    },
    {
      title: "Appointment",
      icon: <HiPencil size={24} color="#0048b2"/>,
      outline: <HiOutlinePencil  size={24} color="#0048b2"/>,
      link: "/appointment"
    },
    {
      title: "Notification",
      icon: <HiBell size={24} color="#0048b2"/>,
      outline: <HiOutlineBell  size={24} color="#0048b2"/>,
      link: "/notification"
    },
    {
      title: 'Dashboard',
      icon: <HiUser size={24} color="#0048b2"/>,
      outline: <HiOutlineUser size={24} color="#0048b2"/>,
      link: "/dashboard"
    }
  ]

  return (
    <Navigation>
      {
        navItems.map((nav, k)=>{
          return(
            <>
              <div key={k} className="item" onClick={()=>{navigate(`${nav.link}`); setActive(k)}}>
              {active === k ? nav.outline : nav.icon}
              <p>{nav.title}</p>
              </div>
            </>
          )
        })
      }
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
