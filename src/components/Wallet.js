
import { useReducer} from "react"

const reducer = (state,action)=>{
    if(action.type === "increase") return {money: state.money+10}
    if(action.type === "decrease") return {money: state.money-10}
    return new Error()
}
const Wallet = ()=>{

    const initialState = {money:100}
    const [state,dispatch] = useReducer(reducer,initialState);

    return(
        <div>
            <h1> Amount Waller: {state.money}</h1>
            <button onClick={()=>dispatch({type:"increase"})}>Increase</button>
            <button onClick={()=>dispatch({type:"decrease"})}>Increase</button>
        </div>
    )
}

export default Wallet;