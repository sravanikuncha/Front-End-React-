import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
const value=createContext();

export function  useContextHook(){
    const resultContext=useContext(value);
    return resultContext;
}

export function CustomContext(props){
    const [total,setTotal]=useState(0);

     const handleIncrease=()=>{
        setTotal(total+1);
    }

    const handleReset=()=>{
        setTotal(0);
    }

    const handleDecrease=()=>{
        setTotal(total-1);
    }

    return (
        <value.Provider value={{total,setTotal,handleIncrease,handleDecrease,handleReset}}>
            {props.children}
        </value.Provider>
    )
}
export {value};