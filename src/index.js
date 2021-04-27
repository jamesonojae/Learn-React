import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
// STORE, ACTION, REDUX, DISPATCHER

// STORE

const store = createStore(
    allReducers,
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
/*
//Action increment
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

/!*const decrease = () => {
  return {
    type: 'DECREMENT'
  }
}*!/

// REDUCER
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1;
      // eslint-disable-next-line no-unused-expressions
    default: return state;
  }
}

let store = createStore(counter);

//display it in console
store.subscribe(() => console.log(store.getState()))

//DISPATCH
store.dispatch(increment())*/
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
