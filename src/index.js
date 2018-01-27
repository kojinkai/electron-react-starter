import React from 'react';
import { render } from 'react-dom';
import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware
} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { fromJS } from 'immutable';
import dashboard from './components/Dashboard/reducer';
import dashboardSaga from './components/Dashboard/saga'
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { configureIDB } from './db';


configureIDB()
  .then(initialState => {

    const rootReducer = combineReducers({ dashboard });
    const sagaMiddleware = createSagaMiddleware()
    const middlewares = [applyMiddleware(sagaMiddleware)];

    if (process.env.NODE_ENV === 'development' && window.__REDUX_DEVTOOLS_EXTENSION__) {
      middlewares.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }

    const store = compose(...middlewares)(createStore)(rootReducer, { dashboard: fromJS({
        items:initialState,
        writing: false,
        writeFailed: false,
      }),
    });
    sagaMiddleware.run(dashboardSaga)

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  })
  .catch(err => {
    console.error('Something went wrong returning your saved data: ', err);
  });
registerServiceWorker();
