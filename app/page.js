'use client';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from './GlobalRedux/Features/counter/counterSlice';
import { useEffect } from 'react';
import {fetchTopicsItems} from "./GlobalRedux/actions/getTopics"
export default function Home() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchTopicsItems())
  },[])
  const {
    loading: isLoading,
    data: itemsData,
    // error: fetchError,
  } = useSelector((state) => state.topics);
console.log(itemsData)
  return (
    <main >
      <button 
         className='w-28 shadow-md bg-gray-200'
        onClick={() => dispatch(increment())}
      >Increment</button>
      <span>{count}</span>
      <button 
        className='w-28 shadow-md bg-gray-200'
        onClick={() => dispatch(decrement())}
      >Decrement</button>
      <button 
        className='w-28 shadow-md bg-gray-200'
        onClick={() => dispatch(incrementByAmount(2))}
      >Increment by 2</button>
    </main>
  );
}
