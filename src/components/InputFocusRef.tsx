import React, { useRef } from 'react';

export function InputFocusRef() {

  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return <div className="m-2">
    <input ref={inputRef} className="form-control" type="text"/>
    <button className="btn btn-primary" onClick={handleClick}>Focus the input</button>
  </div>
}
