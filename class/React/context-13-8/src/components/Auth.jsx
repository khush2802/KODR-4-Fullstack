import React from 'react'
import { useContext } from 'react'
import { ContextConsumer } from '../Mycontext/MyContext'

const Auth = () => {
  const { data, setData, num, setNum } = useContext(ContextConsumer)
  
  return (
    <div>
      <h2>Auth Component</h2>
      <p>Data: {data}</p>
      <p>Num: {num}</p>
      <button onClick={() => setData("Updated Data of khush")}>Update Data</button>
      <button onClick={() => setNum(num + 1)}>Increment Num</button>
    </div>
  )
}

export default Auth
