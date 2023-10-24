
const PropsExpression = (props)=>{
    let bool = false;

    return(<div>
            <h1>{props.bool.toString()}</h1>
            <h1>{props.str}</h1>
            <h1>{props.math}</h1>
    </div>)
}

export default PropsExpression;