import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increaseby1 , decreaseby1} from '../redux/counterSlice';
const Counter = () => {
     const count = useSelector((state)=>state.counter)
     const dispatch = useDispatch();
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>dispatch(increaseby1())}>Increase By 1</button>
        <button onClick={()=>dispatch(decreaseby1())}>Decrease By 1</button>
    </div>
  )
}

export default Counter