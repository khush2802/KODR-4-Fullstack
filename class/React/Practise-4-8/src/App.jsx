import React from 'react'
import { useState } from 'react';

const App = () => {
  let [count, setCount] = useState(30);
  let [count1, setCount1] = useState(20);
  let [count2, setCount2] = useState(10);
  let [gali, setGali] = useState("Teri maa ki chudai");


  const change = () => {
    setGali("Teri maa ki chudai");
  }

  const change1 = () => {
    setCount1(count1 + 1);
    setCount1(count1 + 1);
    setCount1(count1 + 1);
  }

  
  return (
    <div class="container">

      <h1>count is {count}</h1>
      <button onClick={() => {
        setCount(count + 1);
        console.log(count);
      }}>increment</button>

      <h1>count is {count}</h1>
      <button onClick={() => {
        setCount(count + 1);
        console.log(count);
      }}>increment</button>

      <h1>count is {count1}</h1>
      <button onClick={change1}>increment</button>

      

      <h1>gali is {gali}</h1>
      <button onClick={change}>change gali</button>

    </div>
  )
}

export default App
