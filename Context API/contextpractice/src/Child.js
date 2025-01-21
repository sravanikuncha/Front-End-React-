// import { useContext } from "react"
// import { value } from "./context";
import { useContextHook } from "./context";

export default function Child(){
    // const {total,setTotal}=useContext(value);
    const {total,handleDecrease,handleIncrease,handleReset}=useContextHook();

    //swiching the state logic to context .js
    // const handleIncrease=()=>{
    //     setTotal(total+1);
    // }

    // const handleDecrease=()=>{
    //     setTotal(total-1);
    // }
   
    return (
        <>
        <h1>Child {total} </h1>
        <button onClick={handleIncrease} >Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )
}