import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Masthead from '../Masthead/Masthead';
import Sidebar from '../Sidebar/Sidebar';
import Viewer from '../Viewer/Viewer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Masthead />
          <Sidebar />
          <Viewer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
