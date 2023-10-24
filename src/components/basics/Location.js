const Location =()=>{
    let location = ["Boston","New-York","Montréal"]
    let name = "Bobe"
    let bool = name === "Bob"? "Yes": "No"

    return(<div>{location.map(el => <p>{el}</p>)}
        <p> Is bob? { name === "Bob"? "Yes":"No"}</p>
            <p>{Math.random()*10}</p></div>)
}

export default Location;