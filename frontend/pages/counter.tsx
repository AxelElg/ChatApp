import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incremented, decremented } from '../redux/counter'

export default function counter() {
  const {value} = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>the count is: {value}</h1>
      <button onClick={() => dispatch(incremented())}>+</button>
      <button onClick={() => dispatch(decremented())}>-</button>
    </div>
  )
}
