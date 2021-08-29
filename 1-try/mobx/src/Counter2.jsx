import { observer } from 'mobx-react-lite';
import React from 'react';
import './App.css';
import counter2 from './store/counter2';

const Counter2 = observer(() => {
  return (
    <div className="container">
      {counter2.count}
      <div className="btns">
        <button className="btn" onClick={()=>counter2.increment()}>+</button>
        <button className="btn" onClick={()=>counter2.decrement()}>-</button>
      </div>
    </div>
  )
})

export default Counter2;