import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

const INITIAL_STATE = { comments: [], isLoading: false, error: null };

// define and export comments async thunk below
export const getCommentsAsyncThunk=createAsyncThunk("comments/getComments",async (_,thunkAPI)=>{
  thunkAPI.dispatch(fetchStart());
  try{
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );
    const data = await response.json();
    thunkAPI.dispatch(fetchSuccess(data));
  }catch(e){
    thunkAPI.dispatch(fetchError())
  }
})


const commentsSlice = createSlice({
  name: "comments",
  initialState: INITIAL_STATE,
  reducers: {
    fetchStart: (state, action) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      console.log("hbqajbd")
      state.comments = action.payload;
      state.isLoading = false;
    },
    fetchError: (state, action) => {
      state.error = "Failed to fetch comments.";
      state.isLoading = false;
    }
  }
});

export const commentsReducer = commentsSlice.reducer;
export const { fetchStart, fetchSuccess, fetchError } = commentsSlice.actions;

export const commentsSelector = (state) => state.commentsReducer;
