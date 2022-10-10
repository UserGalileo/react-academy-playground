import { useEffect, useState } from 'react';

export function Counter() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Componente montato');

    return () => {
      console.log('Componente smontato')
    }
  }, [])

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
