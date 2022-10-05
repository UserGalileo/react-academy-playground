import React, { useState } from 'react';

export function InputSyncDemo() {
  const [text, setText] = useState('');

  function onInputChange(e: any) {
    setText(e.currentTarget.value);
  }

  return <>
    { /* Controlled Form */ }
    <input
        className="form-control"
        type="text"
        value={text}
        onChange={onInputChange}
    />

    <input
        className="form-control"
        type="text"
        value={text}
        onChange={onInputChange}
    />

    {JSON.stringify(text)}
  </>
}
