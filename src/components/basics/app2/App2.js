import Card from './Card'

const App2 = (props)=>{
    const style = {
        border:"1px solid black",
        width:"100%"
    }
    return(<div style={style}>
        <h1>"Task: Add three Card elements"</h1>
        <Card style={style} h2="First card's h2" h3="First card's h3" />
        <Card style={style} h2="Second card's h2" h3="Second card's h3" />
        <Card style={style} h2="Third card's h2" h3="Third card's h3" />
    </div>)
}

export default App2;