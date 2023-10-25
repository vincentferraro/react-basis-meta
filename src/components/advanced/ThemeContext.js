import React, { useState , useContext} from "react";


const ThemeContext = React.createContext()

export const ThemeProvider = ({children}) =>{
    const [theme, setTheme]= useState("light")
    
    return(
        <ThemeContext.Provider value ={{theme: theme, toggleTheme : ()=> setTheme(theme === "light"? "dark":"light")}} >
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme = ()=> useContext(ThemeContext);