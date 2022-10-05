import { Counter } from '../components/Counter';
import { useState } from 'react';
import { StatelessCounter } from '../components/StatelessCounter';

export function CounterDemo() {

  const [count, setCount] = useState(0);

  return <>
    <StatelessCounter
        count={count}
        onDecrement={(n) => setCount(x => x - n)}
        onIncrement={(n) => setCount(x => x + n)}
    /><br/>
    <StatelessCounter
        count={count}
        onDecrement={(n) => setCount(x => x - n)}
        onIncrement={(n) => setCount(x => x + n)}
    /><br/>
  </>
}
