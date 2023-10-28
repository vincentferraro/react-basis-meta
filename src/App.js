import "./App.css";
// import GoalsForm from "./components/advanced/GoalsForm";
// import GiftCard from "./components/advanced/GifCard";
// import Hooks from "./components/advanced/Hooks";

// import FetchRandomUser from "./components/advanced/FetchRandomUser";
// import ReduceComponent from "./components/advanced/ReduceComponent";
// import Number from "./components/advanced/customHooks/Number";
// import RefComponent from "./components/advanced/RefComponent";
// import WeekDay from "./components/advanced/WeekDay";
// import Children from "./components/advanced/Children";
// import PointMouse from "./components/advanced/PointMouse"
import DataFetch from "./components/advanced/DataFetch";
import LiveOrders from "./components/advanced/LiveOrders";
function App() {
  
  return (
    <div>   
      <h1> Hello</h1>
      <DataFetch />
      <LiveOrders />
    </div>
  );
}

function Root() {
  return (

      <App />
      
  );
}

export default Root;
