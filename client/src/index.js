import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

// https://webpack.js.org/guides/getting-started/#using-a-configuration
// Here its where javascript initialization  src/index.js in webpack documentation

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('root')
);
