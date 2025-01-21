// import redux toolkit methods here
import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define comments reducer function here
const commentSlice=createSlice({
    name:"commentReducer",
    initialState:INITIAL_STATE,
    reducers:{
        loading:(state,action)=>{
            state.error=null;
            state.comments=[],
            state.isLoading=true
        },
        error:(state,action)=>{
            state.comments=[],state.error=action.payload,state.isLoading=false
        },
        success:(state,action)=>{
            state.comments=[...action.payload],state.error=null,state.isLoading=false
        }
    }
})




// export the comments reducer function and action creators here
export const commentReducer=commentSlice.reducer;

export const commentActions=commentSlice.actions;

// export the comments selector function here
export const commentSelector=(state)=>state.commentReducer;
