import { ACT_ADD_MSG, ACT_INIT_MSG, BEGIN_LOAD, END_LOAD } from "./action-types";
import axios from "axios";

const URL = "https://0539-190-194-78-53.sa.ngrok.io/mensajes";

//action creator Standar style
/*export function addMensaje(contenido: string) {
    return {
        type: ACT_ADD_MSG,
        payload: contenido
    }
}*/

//lo convertimos en un thunk
export function addMensaje(contenido: string) {

    /*return function(dispatch:any){
        dispatch({
            type: ACT_ADD_MSG,
            payload: contenido
        })
    } */
    return function (dispatch: any) {
        axios.post(URL, { contenido }).then((resp) => {
            dispatch({
                type: ACT_ADD_MSG,
                payload: contenido
            });
        });    
    }
}

export function initMensajes(){
    return function(dispatch:any){
        dispatch({type:BEGIN_LOAD});
        axios.get(URL).then((resp)=>{
            dispatch({
                type : ACT_INIT_MSG, 
                payload : resp.data
            })
            dispatch({type:END_LOAD});
        })
    }   
}