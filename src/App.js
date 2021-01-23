import React, { useState } from 'react';

const App = () => {
  const initial = 0
  const [count, setCount] = useState(initial)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)

  const increment2 = () => setCount(previousCount => previousCount + 1)
  const decrement2 = () => setCount(previousCount => previousCount - 1)
  const reset = () => setCount(initial)

  const twice = () => setCount(count * 2)

  const div3 = () => setCount((count % 3 == 0) ? count / 3 : count)

  return (
    <>
      <div>
        count {count}
      </div>
      <button onClick={increment2}>+1</button>
      <button onClick={decrement2}>-1</button>
      <button onClick={reset}>reset</button>
      <button onClick={twice}>*2</button>
      <button onClick={div3}>div3</button>
    </>
  )
}

export default App;
