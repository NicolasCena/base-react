import React, { forwardRef, useImperativeHandle, useRef } from 'react'

export const ChildComponent = forwardRef((props, ref) => {

    const { setValue, value } = props

    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        handleFocus: () => {
            return inputRef.current.focus()
        },
        handleValue: () => {
           return inputRef.current.value;
        },
    }))

  return (
    <input type="text" ref={inputRef} value={value} onChange={e => setValue(e.target.value)}/>
  )
})
