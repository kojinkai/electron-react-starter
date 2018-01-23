import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

export class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <Link to="/">Dashboard</Link>
      </nav>
    );
  }
}

export default Sidebar;
