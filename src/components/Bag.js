function Bag(props){
    const bag = {
        padding: "20px",
        border: "1px solid gray",
        background: "#fff",
        margin: "20px 0"
    }
    return(
        <div className={{ padding:"20px", background:"blue"}}>
            {props.children}
        </div>
    )
}

export default Bag;