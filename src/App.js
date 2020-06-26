import React from 'react';
import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import  { increment, decrement } from './actions/counterActions';
import { loggedIn } from './actions/isLoggedInAction';

function App() {
  const counter = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.loggedIn);

  const dispatch = useDispatch();
  return (
    <div className="App">
      <div>
        <h1>Redux Refresher</h1>
        <h3>Counter: {counter}</h3>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default App;
