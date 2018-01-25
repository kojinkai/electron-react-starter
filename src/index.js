import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
import dashboard from './components/Dashboard/reducer';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import configureIDB from './configureIDB';


configureIDB()
  .then(initialState => {
    console.log('initialState is: ', initialState);
    const rootReducer = combineReducers({ dashboard });
    const middlewares = [];

    if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
      middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }

    const store = compose(...middlewares)(createStore)(rootReducer, { dashboard: initialState });

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  })
  .catch(err => {
    // render(
    //   <div>Something went wrong returning your saved data {err}</div>,
    //   document.getElementById('root')
    // );
    console.log('Something went wrong returning your saved data: ', err);
  });
registerServiceWorker();
