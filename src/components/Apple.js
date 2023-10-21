function Apple(props){
    return(
        <div className="promo-section">
            <div>
                <h2>These apple are { props.color}</h2>
            </div>
            <div>
                <h3> There are {props.numbers} apples</h3>
            </div>
        </div>
    )
}

export default Apple;