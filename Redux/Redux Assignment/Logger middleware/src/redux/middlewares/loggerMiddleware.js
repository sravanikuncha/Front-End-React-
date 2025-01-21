// create and export middleware function here


export const loggerMiddleware=function(store){
    return function(next){
        return function(action){
            console.log("LOG :"+action.type);
            next(action);
        }
    }
}