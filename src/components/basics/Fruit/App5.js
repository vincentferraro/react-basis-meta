import FruitsProvider from "./FruitsProvider"
import Fruits from "./Fruits"
import FruitsCounter from "./FruitsCounter"
function App5(){
    
    return(
        <div className="fruits">
            <h1> Where should the state go?</h1>
            <FruitsProvider >
            <Fruits />
            <FruitsCounter />
            </FruitsProvider>
        </div>
    )
}

export default App5