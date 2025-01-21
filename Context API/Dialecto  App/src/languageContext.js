// create language context here
import { createContext } from "react";
import { useState } from "react";

export const languageContextValue=createContext();

export function LanguageContext(props){

    const [language, setLanguage] = useState("English");

    return (
        <languageContextValue.Provider value={{language,setLanguage}}>
            {props.children}
        </languageContextValue.Provider>
    );
}
