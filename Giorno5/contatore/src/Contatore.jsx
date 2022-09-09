import React, {useState} from 'react';

function Contatore() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={
        () => setCounter(counter + 1)
      }>Increment</button>
      <button onClick={
        () => setCounter(counter - 1)
      }>Decrement</button>
    </div>
  );
};

export default Contatore;
