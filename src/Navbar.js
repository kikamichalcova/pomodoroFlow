import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css';

const Navbar = ({ setSettingsVisible }) => {
  return (
    <nav className="navbar">
      <ul>
        <li className="settings">
          <Link to="/settings" onClick={() => setSettingsVisible(true)}>settings</Link>
        </li>
        <li><Link to="/pomodoro-app">pomodoro</Link></li>
        <li><Link to="/">home</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;