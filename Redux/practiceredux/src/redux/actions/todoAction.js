//action constants

export const ADD_TODO="ADD TO-DO";
export const TOGGLE_TODO="TOGGLE  TO-DO";
export const ADD_NOTE="ADD NOTE";


export const addToDO=(text)=>({type:ADD_TODO,text});
export const toggleToDo=(index)=>({type:TOGGLE_TODO,index});
export const addNote=(text)=>({type:ADD_NOTE,text});