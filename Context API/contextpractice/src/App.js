// import { value } from "./context";
import Child from "./Child";
// import { useState } from "react";
import { CustomContext } from "./context";

export default function App(){
    // const [total,setTotal]=useState(10);

    return (
        <>
        <p>Hello App</p>
        {/* before customcontext */}
        {/* <value.Provider value={{total,setTotal}}>
        <Child/>
        </value.Provider> */}

        <CustomContext>
            <Child/>
        </CustomContext>
        </>
    )
}