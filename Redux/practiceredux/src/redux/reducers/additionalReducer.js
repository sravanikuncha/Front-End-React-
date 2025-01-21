

import { ADD_NOTE } from "../actions/todoAction";
import { createSlice } from '@reduxjs/toolkit'

const initialState={
    notes:[
        {noteText:"Note1"},
        {noteText:"Note2"}
    ]
}


// export const addNote=(state=initialState,action)=>{
//     switch(action.type){
//         case ADD_NOTE:{
//             return {...state,notes:[...state.notes,{noteText:action.text}]};
//         }
//         default:
//             return state;
//     }
// }

const noteSlice=createSlice({
    name:'additionalReducer',
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
            state.notes.push({noteText:action.payload})
        }
    }
});

export const noteReducer=noteSlice.reducer;
export  const noteActions=noteSlice.actions;

