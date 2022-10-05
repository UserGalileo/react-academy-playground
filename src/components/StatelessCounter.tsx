export interface StatelessCounterProps {
  count: number;
  onIncrement: (n: number) => void;
  onDecrement: (n: number) => void;
}

export function StatelessCounter(props: StatelessCounterProps) {

  function inc() {
    props.onIncrement(1);
  }

  function dec() {
    props.onDecrement(1);
  }

  return <>
    Count: {props.count}
    <button onClick={inc}>+</button>
    <button onClick={dec}>-</button>
  </>
}
