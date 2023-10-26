import { useEffect, useState } from "react"


const Hooks = ()=>{

    const [toggle, setToggle]= useState('false')

    function handleClick(){
        setToggle(!toggle)
    }

    useEffect(()=>{
        toggle?document.title="hook used" :document.title="No hook"
    },[toggle])
    return(
        <div>
            <h1>Hello toggle</h1>
            <button onClick={handleClick}>toggle</button>
            {toggle && <p> Toggle is true</p>}
        </div>
    )
}

export default Hooks;