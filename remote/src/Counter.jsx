import React, {useState} from 'react'

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        Counter = {count}
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}
