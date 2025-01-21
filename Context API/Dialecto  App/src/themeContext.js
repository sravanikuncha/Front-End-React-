// create theme context here
import { useState } from "react";
import { createContext } from "react";

export const themeContextValue=createContext();

export function ThemeContext(props){
  const [theme, setTheme] = useState("light");


    return (
        <themeContextValue.Provider value={{theme,setTheme}}>
            {props.children}
        </themeContextValue.Provider>
    );
}