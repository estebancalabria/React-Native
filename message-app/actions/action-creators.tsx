import { ACT_ADD_MSG } from "./action-types";

export function addMensaje(contenido: string) {
    return {
        type: ACT_ADD_MSG,
        payload: contenido
    }
}