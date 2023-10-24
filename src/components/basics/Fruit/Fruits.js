
import { useFruitsListContext } from "./FruitsProvider"
const Fruits = ()=>{
    const {fruits} = useFruitsListContext()

    return(
        <div>
             {fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits;