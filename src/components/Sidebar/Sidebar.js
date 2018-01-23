import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Sidebar extends Component {
  render() {
    return (
      <nav className="sidebar">
        <Link to="/dashboard">Dashboard</Link>
      </nav>
    );
  }
}

export default Sidebar;
