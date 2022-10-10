import React, { forwardRef, Ref, useImperativeHandle, useRef } from 'react';

/*
 CHALLENGE: Create <MyButton> and substitute <button>.
 */
export function ForwardRefExample() {

  const inputRef = useRef<any>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return <>
    <MyInput ref={inputRef} />
    <button onClick={handleClick}>focus</button>
  </>
}

type MyInputProps = React.HTMLProps<HTMLInputElement>;

// const MyInput = forwardRef((props: MyInputProps, ref: any) => {
//   return <input className="form-control" {...props} ref={ref} />
// })

export const MyInput = forwardRef((props: MyInputProps, ref: any) => {

  const realInputRef = useRef<HTMLInputElement | null>(null);

  // Expose only "focus" and "blur"
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current?.focus();
    },
    blur() {
      realInputRef.current?.blur();
    }
  }))

  return <input className="form-control" {...props} ref={realInputRef} />
})

