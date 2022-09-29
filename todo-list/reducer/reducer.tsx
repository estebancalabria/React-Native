import { Alert } from "react-native";
import { ACT_AGREGAR_TAREA, ACT_ELIMINAR_TAREA } from "../actions/action-types";

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
        case ACT_ELIMINAR_TAREA:
            newState.tareas = newState.tareas.filter((t:any) => (t.id !== action.payload))
            break;
        default:
            break;
    }
    return newState;
}