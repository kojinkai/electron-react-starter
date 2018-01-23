import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';

export class Viewer extends Component {
  render() {
    return (
      <main role="main" className="viewport">
        <Route path="/dashboard" component={Dashboard} />
      </main>
    );
  }
}

export default Viewer;
