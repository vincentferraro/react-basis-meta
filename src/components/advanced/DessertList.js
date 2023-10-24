function DessertList(props){
        return(<ul>
            {props.data.filter(el => el.calories > 500).sort().map(el=><li>${el.name} - ${el.calories}</li>)}
        </ul>)
}

export default DessertList;