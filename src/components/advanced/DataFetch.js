import { useState,useEffect } from "react"

// Theses components permit to introduce RENDER PROPS

const DataFetcher = ({render, url})=>{
    const [ data, setData]= useState([])

    useEffect(()=>{
        if(url.includes('desserts')){
            console.log("Icis")
            setData(["cake","ice-cream","pie","brownie"])
        }else{
            setData(["water","soda","juice"])
        }
    },[url])
    console.log(data)
    return render(data)
}


const DessertCount= ()=>{
    return(
    
    <DataFetcher url={"http://lemomonjuice.com/desserts"} render={(data)=> <h2>{data.length} desserts</h2>}/>)
}

const DrinkCount =()=>{
    return (<DataFetcher url={"http://lemomonjuice.com/drinks"} render={(data)=><h2>{data.length} drinks</h2>} />)
}

const DataFetch = ()=>{

    return(<div>
        <h2>Data Fetcher</h2>
        <DessertCount />
        <DrinkCount />
    </div>)
}

export default DataFetch