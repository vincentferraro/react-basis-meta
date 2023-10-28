import * as React from 'react'

const Row = ({children})=>{
    const childStyle = {
        color:"blue",
    }
    return(
        <div>
            {React.Children.map(children,(child)=>{
            return React.cloneElement(child, {
                style:{
                    ...child.props.style,
                    ...childStyle
                }
            })
        })}
        </div>
        
    )
}


const LiveOrders = ()=>{

    return ( <div>
        <h1> Live order</h1>
        <Row>
            <p>Hello</p>
            <p>World</p>
            <p>I</p>
            <p>am</p>
            <p>Vincent</p>
        </Row>
    </div>)
}

export default LiveOrders