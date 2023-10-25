import "./App.css";
import DessertsList from "../src/components/advanced/DessertList";
import { useState } from "react";
import Todo from "./components/advanced/Todo";
const desserts = [
  {
    name: "Chocolate Cake",
    calories: 400,
    createdAt: "2022-09-01",
  },
  {
    name: "Ice Cream",
    calories: 200,
    createdAt: "2022-01-02",
  },
  {
    name: "Tiramisu",
    calories: 300,
    createdAt: "2021-10-03",
  },
  {
    name: "Cheesecake",
    calories: 600,
    createdAt: "2022-01-04",
  },
];

function App() {
  const [todos,setTodos]=useState([
    {id:"todo1",
    createdAt:"18:30" },
    {id:"todo2",
    createdAt:"20:30" }
])

  function reverseOrder(){
    setTodos([...todos].reverse())
  }
  
  return (
    <div className="App">
      
      <h2>List of low calorie desserts:</h2>
      <DessertsList data={desserts} />
      <div>
        <button onClick={ reverseOrder}>Reverse</button>
      {todos.map((todo,index) => <Todo key={todo.id}id={todo.id} createdAt={todo.createdAt} />)}
      </div>
      
    </div>
  );
}

export default App;
