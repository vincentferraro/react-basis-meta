import { useRef } from "react"

const InputUseRef = ()=>{

    const  inputEl = useRef(null)

    const onButtonClick = ()=>{
        inputEl.current.focus()
        console.log(inputEl)
    };

    return(
        <>
        <input ref={inputEl} type="text"/>
        <button onClick={onButtonClick}>Focus the input</button>
        </>
    )

}

export default InputUseRef