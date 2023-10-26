
import { useState } from "react"
import increment from "./increment"
const Number = ()=>{

    const[number, setNumber]=useState(0)

    return(<>
    <h1>Number: {number}</h1>
    <button onClick={()=>{increment(setNumber)}}>Add +1</button>
        </>)

}
export default Number;