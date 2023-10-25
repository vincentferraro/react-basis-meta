const Todo = (props)=>{
   

    return(<div>
        <tr>
            <td>{props.id}</td>
            <td> <input /> </td>
            <td>{props.createdAt}</td>
        </tr>
    </div>)
}

export default Todo;