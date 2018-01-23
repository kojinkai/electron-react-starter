import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import './Viewer.css';

export class Viewer extends Component {
  render() {
    return (
      <main role="main" className="viewer">
        <Route path="/" component={Dashboard} />
      </main>
    );
  }
}

export default Viewer;
