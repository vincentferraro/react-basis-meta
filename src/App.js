import "./App.css";
// import GoalsForm from "./components/advanced/GoalsForm";
// import GiftCard from "./components/advanced/GifCard";
// import Hooks from "./components/advanced/Hooks";

// import FetchRandomUser from "./components/advanced/FetchRandomUser";
// import ReduceComponent from "./components/advanced/ReduceComponent";
import Number from "./components/advanced/customHooks/Number";
import RefComponent from "./components/advanced/RefComponent";
function App() {
  
  return (
    <div>   
      <RefComponent />
      <Number />
    </div>
  );
}

function Root() {
  return (

      <App />
      
  );
}

export default Root;
