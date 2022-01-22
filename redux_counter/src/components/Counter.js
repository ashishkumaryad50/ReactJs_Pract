import './Counter.css';
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  // iife 
  // useEffect(() => {

  // })
  const dispatch = useDispatch();
  const counter = useSelector((state) => (state.counter));
  const incrementHandler = () => {
    dispatch({
      type: 'INCREMENT',
    });
  }
  const decrementHandler = () => {
    dispatch({
      type: 'DECREMENT',
    });
  }

  return (
    <main className="counter">
      <h1>Counter</h1>
      <div className="value">{counter}
      </div>
      <div>
        <button className='butRed' onClick={decrementHandler}>Decrement</button>
        <button className='butBlue' onClick={incrementHandler}>Increment</button>
      </div>
    </main>
  );
};

export default Counter;
