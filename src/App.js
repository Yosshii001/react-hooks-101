import React, { useState } from 'react';

const App = props => {

  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)

  const reset = () => {
    setPrice(props.price)
    setName(props.price)
  }

  return (
    <>
      <p>現在の{name}は、{price}円です。</p>
      <button onClick={() => setPrice(price + 1)}>+1</button>
      <input value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={reset}>reset</button>
    </>
  )
}

App.defaultProps = {
  name: '',
  price: 1000
}

export default App;
