import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import MainPage from './pages/mainPage/index';
import { runtime } from './reducers/runtime';

import './index.css';

const rootReduser = combineReducers({
  runtime,
  form: formReducer,
});

const store = createStore(
  rootReduser,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <MainPage />
        </MuiThemeProvider>
      </Provider>
    );
  }
}
