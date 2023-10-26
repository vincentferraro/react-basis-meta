import { useState } from "react"

const Goals = (props)=>{

    const [goal, setGoal]= useState({goal:"",by:""})

    function changeHandler(e){
        console.log(e)
        setGoal({...goal, [e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        props.onAdd(goal)
        setGoal({goal:"",by:""})
    }

    return(
        <form onSubmit={handleSubmit}>
            <label> Goal : <input type="text" name="goal" placeholder="goals..." value={goal.goal} onChange={changeHandler} />
            </label>
            <label> By: <input type="text" name="by" placeholder="by...."  value={goal.by} onChange={changeHandler} />
            </label>
            <button type="submit">add</button>
        </form>
    )
}

const ListGoals = (props)=>{

    return(
        <div>
            <ul>
            {props.goals.map( (goal,index) =>
            <li key={index} >Goal: {goal.goal} by {goal.by} </li>)}
            </ul>
        </div>
    )
}

const GoalsForm = ()=>{

    const [listGoals, setListGoals]= useState([])

    function onAdd(goals){
        setListGoals([...listGoals, goals])
        console.log(listGoals)
    }
    return(
        <div>
            <h1> Goals form:</h1>
            <Goals onAdd={onAdd} />
            <ListGoals goals={listGoals} />
        </div>
    )
}

export default GoalsForm;