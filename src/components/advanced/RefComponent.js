import { useRef } from "react"

const RefComponent = ()=>{

    const formInputRef = useRef(null)

    function focusInput(){
        formInputRef.current.focus()
    }

    return(
        <>
        <h1> We use useRef in this component</h1>
        <input type="text" ref={formInputRef} />
        <button onClick={focusInput}>focus input</button>
        </>
    )
}

export default RefComponent