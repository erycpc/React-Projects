import './App.css'
import Counter from './components/Counter'
import { useState } from 'react'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)

  return (
    <>
      <Counter label="Counter 1" count={count1} setCount={setCount1} />
      <Counter label="Counter 2" count={count2} setCount={setCount2} />
      <Counter label="Counter 3" count={count3} setCount={setCount3} />
      <button onClick={() => { setCount1(0); setCount2(0); setCount3(0) }}>
        Reset All
      </button>
    </>
  )
}

export default App
