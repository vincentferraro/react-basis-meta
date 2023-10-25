

function DessertList(props){
        return(<ul>
            {props.data.filter(el => el.calories < 500).sort((a,b)=> {return a.calories - b.calories}).map(el=><li>{el.name} - {el.calories} calories</li>)}
        </ul>)
}

export default DessertList;