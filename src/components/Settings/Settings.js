import React, { Component } from 'react';
import './Settings.css';
import icon from './settings.svg';

export class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <img src={icon} className="settings__icon" alt="settings icon" />
        Add another page here
      </div>
    );
  }
}

export default Settings;
