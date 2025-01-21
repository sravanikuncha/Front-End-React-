// define counter action constants here

export const INCREMENT="INCREMENT";
export const DECREMENT="DECREMENT";
export const RESET="RESET";


// define counter action creators here
export const increment=()=>({type:INCREMENT,payload:{}});
export const decrement=()=>({type:DECREMENT,payload:{}});
export const reset=()=>({type:RESET,payload:{}});
