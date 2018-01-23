import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Settings from '../Settings/Settings';
import './Viewer.css';

export class Viewer extends Component {
  render() {
    return (
      <main role="main" className="viewer">
        <Route exact  path="/" component={Dashboard} />
        <Route path="/settings" component={Settings} />
      </main>
    );
  }
}

export default Viewer;
