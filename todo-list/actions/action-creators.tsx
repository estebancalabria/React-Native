import * as tipos from "./action-types"

export const agregarTarea = (nombre:string) =>{
    return {
        type : tipos.ACT_AGREGAR_TAREA,
        payload : nombre
    }
}

export const eliminarTarea = (id:number) =>{
    return {
        type : tipos.ACT_ELIMINAR_TAREA,
        payload: id
    }
}