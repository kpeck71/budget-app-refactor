import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../piggy-bank.png';
import '../App.css';

const NavBar = () => {

  return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to a Better Budget</h1>

      <div>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          style={{ marginRight: '10px' }}
          to="/ideas">
          Ideas
        </NavLink>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/status">
          Status
        </NavLink>
        <NavLink
          style={{ marginRight: '10px' }}
          to="/completed">
          Completed Goals
        </NavLink>
      </div>
      </header>
  );
}

export default NavBar;
