import React, { Fragment, Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Masthead from '../Masthead/Masthead';
import Sidebar from '../Sidebar/Sidebar';
import Viewer from '../Viewer/Viewer';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Masthead />
        <BrowserRouter>
          <div className="app">
            <Sidebar />
            <Viewer />
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
