import './App.css';
// import Heading from './Heading'
// import Bag from './components/Bag';
// import Apple from './components/Apple';
// import Pears from './components/Pears';
// import Nav from './components/Nav';
// import Nav2 from './components/Nav2';
// import Location from './components/Location';
// import logo from './img/logo192.png'
// import App2 from './components/app2/App2.js';
// import Btn from './components/Btn';
// import App3 from './components/app3/App3';
// import DarkMode from './functions/darkMode';
import Promo2 from './components/promo/Promo2';
import Dog from './components/dataFlow/Dog';
import InputComponent from './components/hooks/InputComponent';
import Form from './components/hooks/Form';
import InputUseRef from './components/hooks/InputUseRef';
import Heading from './components/hooks/Heading';

import PropDrilling from './components/app4/PropDrilling';
// const bool = false;
// const str1 = 'The :'

// const Logo = (props)=>{
//   const logoPic = <img src={logo}/>
//   return logoPic
// }
// const PropsExpression = (props)=>{
  

//   return(<div>
//           <h1>{props.toBolean.toString()}</h1>
//           <h1>{props.str}</h1>
//           <h1>{props.math}</h1>
//   </div>)
// }



export default function App() {
  return (
    <div className="App">
        {/* <Heading firstName="Bob" />
        <Heading firstName= "Vinc" />
        <Bag >
          <Apple color="red" numbers="5"/>
          <Pears friend="Henry"/>
        </Bag>
        <Nav />
        <Nav2 />
        <Location />
        <PropsExpression toBolean={!bool} str={str1+'Hello' + "The world"} math={1+23}/>
        <Logo />
        <App2 />
        <Btn />
        <DarkMode />
        <App3 /> */}
        <Promo2 />
        <Promo2 />
        <Dog />
        <InputComponent />
        <br></br>
        <br></br>
        <br></br>
        <Form />
        <InputUseRef />

         <br></br>
         <br></br>
         <br></br>
          <br></br>
          <Heading />
          <PropDrilling />
    </div>

  )
}

