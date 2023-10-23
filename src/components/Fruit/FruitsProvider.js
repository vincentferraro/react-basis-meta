import React from "react";

const FruitsContext = React.createContext()

const fruitsList = [{fruitName: 'apple', id: 1},
{fruitName: 'apple', id: 2},
{fruitName: 'plum', id: 3}]

const FruitsProvider = ({children})=>{
    const [fruits, setFruits]= React.useState(fruitsList)
    return(
        <FruitsContext.Provider value={{fruits}}>
            {children}
        </FruitsContext.Provider>
    )
}

export const useFruitsListContext =()=> React.useContext(FruitsContext)


export default FruitsProvider;