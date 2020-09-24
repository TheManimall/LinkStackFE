import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";

const NavBar = (props) => {
  const auth = useContext(AuthContext)
  const history = useHistory()

  const logoutHandler = e => {
    e.preventDefault()
    auth.logout()
    history.push('/')
  }

  return(
  <nav>
    <div className="nav-wrapper darken-1" style={{ padding: '0 2rem' }}>
      <a href="/" className="brand-logo">LinkStack</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/create">Create</NavLink></li>
        <li><NavLink to="/links">Links</NavLink></li>
        <li><a href="/" onClick={logoutHandler}>Log out</a></li>
      </ul>
    </div>
  </nav>
)};

export default NavBar;