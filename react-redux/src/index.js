import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import rootReducer from './modules';

const store = createStore(rootReducer, composeWithDevTools());
// create store using rootReducer
// DevTools을 이용하기 위해 createStore에 파라미터 추가

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
// reportWebVitals();
