import './App.css';
import Heading from './Heading'
import Bag from './components/Bag';
import Apple from './components/Apple';
import Pears from './components/Pears';
import Nav from './components/Nav';
import Nav2 from './components/Nav2';
import Location from './components/Location';




function App() {
  return (
    <div className="App">
        <Heading firstName="Bob" />
        <Heading firstName= "Vinc" />
        <Bag >
          <Apple color="red" numbers="5"/>
          <Pears friend="Henry"/>
        </Bag>
        <Nav />
        <Nav2 />
        <Location />
    </div>

  )
}

export default App;
