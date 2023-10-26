import { useEffect } from "react"

import { useState } from "react"

const Fetch = ()=>{

    const [data, setData]=useState({})
    
    function fetchData(){
        fetch(`https://api.coindesk.com/v1/bpi/currentprice.json`)
        .then(response => response.json())
        .then((jsonData)=> {
            console.log(jsonData.bpi.USD)
            setData(jsonData.bpi.USD)})
    }
    
    useEffect(()=>{
        fetchData()
    },[])
    return Object.keys(data).length > 0 ? (
        <> 
          <h1>Current BTC/USD data</h1> 
          <p>Code: {data.code}</p> 
          <p>Symbol: {data.symbol}</p> 
          <p>Rate: {data.rate}</p> 
          <p>Description: {data.description}</p> 
          <p>Rate Float: {data.rate_float}</p> 
        </> 
      ) : (<>
      <h1>Data pending...</h1>
      </>
        
      );
}

export default Fetch