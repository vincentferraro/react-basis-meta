import './App.css';
import Heading from './Heading'
import Bag from './components/Bag';
import Apple from './components/Apple';
import Pears from './components/Pears';
function App() {
  return (
    <div className="App">
        <Heading firstName="Bob" />
        <Heading firstName= "Vinc" />
        <Bag >
          <Apple color="red" numbers="5"/>
          <Pears friend="Henry"/>
        </Bag>
    </div>
  )
}

export default App;
