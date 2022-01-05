import React, { useRef } from 'react'

function FuncRef() {

    let inputRef = useRef('demo')
    let focusInput=()=>{
        inputRef.current.focus()
    }
    return (
        <div>
            <input ref={inputRef}/>
            <button onClick={focusInput}>Click to focus</button>
        </div>
    )
}

export default FuncRef
