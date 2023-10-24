import { useState } from "react"
import Line from "./Line"
const Heading = ()=>{
    const [word, setWord] = useState('Eat')

    function handleClick(){
        if(word === "Eat"){
            setWord("Drink")
        }else{
            setWord("Eat")
        }
    }
    return(
        <>
        <p>{word + ' the Apple Juice'}</p>
        <Line message ={word} />
        <button onClick={handleClick}>Click here</button>
        </>
    )
}

export default Heading