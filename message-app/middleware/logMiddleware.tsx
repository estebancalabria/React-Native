
const logMiddleware = (store:any) => (next:any) => (action:any) =>{
    console.log("Antes de llegar al reducer");
    console.log(action);
    next(action); //Mando la accion al reducer
}

export default logMiddleware;