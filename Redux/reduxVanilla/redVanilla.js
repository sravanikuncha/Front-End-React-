const redux=require("redux");

const incrAction="INC_ACTION";
const decAction="DEC_ACTION";

//Actions 
const incrActionFn=(value)=>({value,type:incrAction});
const decrActionFn=(value)=>({value,type:decAction});


//state in store
const initialState={
    counter:0,
}

//reducerFUnctions
const counterReducerFnAction=(state=initialState,action)=>{
    switch(action.type){
        case incrAction:{
            return {
                ...state,counter:state.counter+action.value
            };
        }
        case decAction:{
            return(
                {...state,counter:state.counter-action.value}
            );
        }
        default:{
           return state
        }
        }
    }


//create store 

const store=redux.createStore(counterReducerFnAction);


//get the state before dispatching the actions
console.log(store.getState());

//dipstach the action i..e, compoenet has done  or anted teh change so we dispatch the action means internally asking to change state
store.dispatch(incrActionFn(5)); //telling  the store that this the action you need to perform via reducer 
store.dispatch(incrActionFn(10))
store.dispatch(decrActionFn(2));


//get teh new state after dispatching teh required actions
console.log(store.getState());