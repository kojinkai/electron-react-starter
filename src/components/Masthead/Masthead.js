import React, { Component } from 'react';
import './Masthead.css';
import logo from './logo.svg';

class Masthead extends Component {
  render() {
    return (
      <header className="masthead__header">
        <img src={logo} className="masthead__logo" alt="logo" />
        <h1 className="masthead__title">Welcome to Electron React</h1>
      </header>
    )
  }
}

export default Masthead;
