import './App.css';
import { Link, Routes, Route } from 'react-router-dom';

import Contact from '../src/components/navigation/Contact'
import Home from './components/navigation/Home';
import CurrentMessage from './components/ternary/CurrentMessage';
import LogicalAndExample from './components/ternary/LogicalAndExample';
import logo from'../src/assets/images/7.jpg'
export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/" className='nav-item'>Home</Link>
        <Link to="/contact" className='nav-item'>Contact </Link>
      </nav>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      {/* <CurrentMessage /> */}
      {/* <LogicalAndExample /> */}
      <div>
        <h1>Below the image of the logo:</h1>
        <img height={300}src={logo} alt="lorem ipsum logo" />
      </div>
          </div>
  )
}

