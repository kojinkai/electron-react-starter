import React, { Component } from 'react';
import './Masthead.css';
import logo from './logo.svg';

class Masthead extends Component {
  render() {
    return (
      <header className="masthead">
        <h1 className="masthead__header">Electron React Starter Kit</h1>
        <img src={logo} className="masthead__logo" alt="logo" />
      </header>
    )
  }
}

export default Masthead;
