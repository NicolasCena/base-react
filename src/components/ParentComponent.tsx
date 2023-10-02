import React, { useRef, useState } from 'react'
import { ChildComponent } from './ChildComponent'

export const ParentComponent = () => {

    const childRef = useRef(null)
    const [ value, setValue ] = useState('')

    const handleFocusParent = () => {
        childRef.current.handleFocus()
    }

    const handleValueParent = () => {
        const childValue = childRef.current.handleValue();
        console.log('Valor del hijo:', childValue);
    };

  return (
    <div>
        <ChildComponent ref={childRef} value={value} setValue={setValue} />
        <button onClick={handleFocusParent}>Hacer Foco</button>
        <button onClick={handleValueParent}>Leer valor</button>
    </div>
  )
}
