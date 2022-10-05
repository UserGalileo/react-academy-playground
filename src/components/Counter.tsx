import { useState } from 'react';

export function Counter() {

  const [count, setCount] = useState(0);

  function inc() {
    setCount(n => n + 1);
  }

  function dec() {
    setCount(n => n - 1);
  }

  return <>
    Count: {count}
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
  </>
}
