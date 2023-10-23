import Bowl from "./Bowl";

const Puppy = (props)=>{
    return(
        <div>
            {props.name} has <Bowl bowlShape={props.bowlShape} bowlStatus={props.bowStatus} />
        </div>
    )
}

export default Puppy;