import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <Link className="sidebar__item" to="/">Dashboard</Link>
        <Link className="sidebar__item" to="/settings">Settings</Link>
      </nav>
    );
  }
}

export default Sidebar;
