import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';

// https://webpack.js.org/guides/getting-started/#using-a-configuration
// Here its where javascript initialization  src/index.js in webpack documentation
const root = createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />{' '}
  </Provider>
);
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,

//   document.getElementById('root')
// );
