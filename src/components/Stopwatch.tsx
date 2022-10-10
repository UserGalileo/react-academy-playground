import { useRef, useState } from 'react';

/*
 CHALLENGE: Create a "Reset" button to reset the time to 0.
 */
export function Stopwatch() {

  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<any>(null);

  let secondsPassed = 0;

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 100);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  return <>
    <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
  </>
}
