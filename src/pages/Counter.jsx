import React, { use } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/CounterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
  return (
    <div className='p-[150px]'>
        <button onClick={() => dispatch(decrement())}>-</button>
        <span>{count}</span>
        <button onClick={() => dispatch(increment())}>+</button>
    </div>h
  );
};

export default Counter;