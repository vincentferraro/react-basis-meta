
// Displaying h1 doesn't work depend of light variable
// It will be handled later


const DarkMode =()=>{

    let light = true;
    let darkMode = <h1>Dark Mode ON :</h1>
    let lightMode = <h1>Light Mode ON :</h1>

    const handleClick = ()=>{
        light = !light;
        if(light === true){
            console.log("Light mode ON")
        }else{
            
            console.log("Dark mode On")
        }
    }
    return(<div>
        { light? lightMode: darkMode}
        <button onClick={handleClick}>click me</button>
    </div>)
}

export default DarkMode;