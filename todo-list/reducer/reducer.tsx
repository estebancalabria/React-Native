import { ACT_AGREGAR_TAREA } from "../actions/action-types";

export default function reducer(state:any, action:any){
    let newState = {...state};
    switch (action.type) {
        case ACT_AGREGAR_TAREA:
            newState.tareas = [
                ...newState.tareas,
                {
                    id: Math.max(...newState.tareas.map((t:any)=>(t.id)),0) + 1,
                    nombre : action.payload,
                    done:false
                }
            ] 
            break;
    
        default:
            break;
    }
    return newState;
}