import './App.css';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from './actions';

function App() {
  const  counter = useSelector(state => state.counter);
  const  logInStatus = useSelector(state => state.isLogged);
  const dispatch = useDispatch()
  return (
    <div className="App">
      Learning Redux
      <p>{counter}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      <h3>Valuable Information</h3>
      <p>{logInStatus}</p>
    </div>
  );
}

export default App;
