// import action constants here
import { FETCH_LOADING } from "../actions/fetchActions";
import { FETCH_SUCCESS } from "../actions/fetchActions";
import { FETCH_ERROR } from "../actions/fetchActions";

const INITIAL_STATE = { isLoading: false, data: [], error: null };

// define reducer function here
export const fetchReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case FETCH_LOADING:{
            return ({isLoading:true,data:[],error:null})
        }
        case FETCH_SUCCESS:{
            return ({isLoading:false,data:action.payload,error:null});
        }
        case FETCH_ERROR:{
            return ({isLoading:false,data:[],error:action.payload});
        }
        default:{
            return state;
        }
    }
}
