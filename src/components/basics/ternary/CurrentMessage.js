import Weekends from "./Weekends";
import Workdays from "./Workdays";

const CurrentMessage =()=>{
    const day = new Date().getDay();

    return(day >=1 && day <=5? <Workdays />: <Weekends/>)
}

export default CurrentMessage;