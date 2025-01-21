const redux = require("redux");

// import counter reducer function here
const { timerReducer } = require("./redux/reducers/timerReducer");
import { counterReducer } from "./redux/reducers/counterReducer";
import { combineReducers } from 'redux';

// combine the reducer functions here

const res=combineReducers({
    reducer1:timerReducer,
    reducer2:counterReducer
})

// add the root reducer function to store here
export const store = redux.createStore(res);
