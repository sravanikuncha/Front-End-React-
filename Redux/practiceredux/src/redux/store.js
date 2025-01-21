import * as redux from 'redux';

//get reducer as only reducer can talk  to store 
// import { todoReducer } from './reducers/todoReducer';
// import { combineReducers } from 'redux';
// import { addNote } from './reducers/additionalReducer';

// const reducers=combineReducers({
//     reducer1:todoReducer,
//     reducer2:addNote
// })

// export const todoStore =redux.createStore(reducers);


// redux tolkit

import { configureStore } from '@reduxjs/toolkit';

import { todoReducer } from './reducers/todoReducer';
import { noteReducer } from './reducers/additionalReducer';
import { notificationReducer } from './reducers/notificationnReducer';
import { loggerMiddleware } from './middleware/loggerMiddleware';

export const store=configureStore({
    reducer:{
        reducer1: todoReducer,
        reducer2:noteReducer,
        reducer3:notificationReducer
    },
    middleware:[loggerMiddleware]
});