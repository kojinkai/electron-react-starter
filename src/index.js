import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import configureIDB from './configureIDB';


render(<App />, document.getElementById('root'));
configureIDB().then(data => {
  // get data from IDB, now seed your reducer or kick off your application
  console.log('data is: ', data);
});
registerServiceWorker();
