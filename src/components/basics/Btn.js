// const Btn = ()=>{
//     const clickHandler = ()=> console.log('clicked')
//     return(<button onClick={clickHandler}>Click me</button>)
// }

const Btn = ()=>{
    const clickHandler = ()=> console.log('clicked')
    return(<button onMouseOver={clickHandler}>Click me</button>)
}

export default Btn;