
import Puppy from "./Puppy";

const Dog = ()=>{
    const data = {
        name:"Max",
    }
    return(<div>
        <Puppy name={data.name} bowlShape="square" bowlStatus="full" />
    </div>)
}

export default Dog;