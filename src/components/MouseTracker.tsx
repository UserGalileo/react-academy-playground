import { useEffect, useState } from 'react';

export function MouseTracker() {

  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    };

    if (canMove) {
      window.addEventListener('pointermove', onMove);

      return () => {
        window.removeEventListener('pointermove', onMove)
      }
    }
  }, [canMove])

  return (
      <>
        <label>
          <input type="checkbox"
                 checked={canMove}
                 onChange={e => setCanMove(e.target.checked)}
          />
          The dot is allowed to move
        </label>
        <hr />
        <div style={{
          position: 'absolute',
          backgroundColor: 'pink',
          borderRadius: '50%',
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
        }} />
      </>
  );
}
