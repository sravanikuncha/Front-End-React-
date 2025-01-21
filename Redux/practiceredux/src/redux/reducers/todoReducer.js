
import { ADD_TODO,TOGGLE_TODO } from "../actions/todoAction";
import { createSlice } from "@reduxjs/toolkit";


const initialState={
    todos:[{text:"Wake up early",completed:false},
        {text:"warm up and get ready for gym",completed:false}
    ]
}

// export const todoReducer=(state=initialState,action)=>{
//     switch(action.type){
//         case ADD_TODO:
//             return {...state,todos:[...state.todos,{text:action.text,completed:false}]};
//         case TOGGLE_TODO:{
//             const newTodo=state.todos.map((eachTodo,index)=>{
//                 if(index==action.index){
//                     eachTodo.completed=!eachTodo.completed;
//                 }
//                 return eachTodo;
//             })
//             console.log(newTodo)
//             return {...state,todos:newTodo};
//         }
//         default:
//             return state;
            
//     }
// }

const todoSlice=createSlice({
    name:"todoReducer",
    initialState:initialState,
    reducers:{
        add:(state,action)=>{
            state.todos.push({text:action.payload,completed:false})
        },
        toggle:(state,action)=>{
            console.log("krkfkj")
            state.todos=state.todos.map((eachTodo,index)=>{
                            if(index==action.payload){
                                eachTodo.completed=!eachTodo.completed;
                            }
                            return eachTodo;
                           })
        }
    }
});

export const todoReducer=todoSlice.reducer;

export  const todoActions=todoSlice.actions;