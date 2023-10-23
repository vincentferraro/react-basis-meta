import { useFruitsListContext } from "./FruitsProvider";

const FruitsCounter = ()=>{
    const {fruits} = useFruitsListContext()

    return(
        <div>
            <p>Total fruits: {fruits.length}</p>
        </div>
    )
}

export default FruitsCounter;
