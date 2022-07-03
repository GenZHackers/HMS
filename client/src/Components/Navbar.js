import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components"

const NavBar = () => {
  let activeStyle = {
    textDecoration: "none",
  }

  let activeClassName = "underline"

  return (
    <Navigation>
      <Ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="appointment"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Appointment
          </NavLink>
        </li>
        <li>
          <NavLink to="notification">
            {({ isActive }) => (
              <span className={isActive ? activeClassName : undefined}>
                Notifications
              </span>
            )}
          </NavLink>
        </li>
      </Ul>
    </Navigation>
  )
}

const Navigation = styled.nav`
  width: 100%;
  position: fixed;
  text-align: center;
  padding: 1rem;
  background-color: #ccc;
  width: 100%;
  bottom: 0;
  right: 0;
`
const Ul = styled.ul`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: center;
  list-style: none;
  text-decoration: none;

  li {
    margin: 0 1rem;
  }
`
export default NavBar
