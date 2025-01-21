
import { createSlice } from "@reduxjs/toolkit";

const initialState={
    message:""
}

const notificationSlice=createSlice({
    name:"notifiction",
    initialState,
    reducers:{

    },
    extraReducers:{
        "additionalReducer/add":(state,action)=>{
             state.message="Note is Added"
        }
    }
   
});

export const notificationReducer=notificationSlice.reducer;

export const notificationSelector=(state)=>state.reducer3.message;
