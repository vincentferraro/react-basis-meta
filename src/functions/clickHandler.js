// SEVERAL WAY for handleClick function

const clickHandlerES6 = ()=>{

    return ( <button onClick={()=>{ console.log("clicked")}}>Click Me ES6</button>)

}

function clickHandlerES5 (){
    return( <button onClick={function(){ console.log('Clicked ES5')}}>Click Me ES5</button>)
}


const clickHandlerSeparateES6 = ()=>{
    const clickHandler = ()=>console.log('Click Function separalty')

    return( <button onClic={clickHandler}>Click Me Separatly</button>)
}

const clickHandlerSeparateES5 = ()=>{
    function clickHandler(){console.log('Click Function separalty')}

    return( <button onClic={clickHandler}>Click Me Separatly</button>)
}
export { clickHandlerES5, clickHandlerES6, clickHandlerSeparateES6, clickHandlerSeparateES5};