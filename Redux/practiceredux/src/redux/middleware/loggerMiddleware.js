// import { useSelector } from "react-redux";

export const  loggerMiddleware=function(store){
    return function(next){
        return function(action){
            console.log("LOG is :"+action.type);
            next(action);
            console.log(store.getState());
        }
    }
}