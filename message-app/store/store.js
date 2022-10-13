import { configureStore } from "@reduxjs/toolkit";
import { ACT_ADD_MSG } from "../actions/action-types";
import axiosMiddleware from "../middleware/axiosMiddleware";
import logMiddleware from "../middleware/logMiddleware";

export default configureStore({
    preloadedState : {
        mensajes : []
    }, 
    reducer : (state, action) => {
        let newState = {...state};
        switch (action.type) {
            case ACT_ADD_MSG:
                newState.mensajes = [...newState.mensajes,
                {
                    id : newState.mensajes.length+1,
                    contenido : action.payload
                }]
                break;
        
            default:
                break;
        }
        return newState;
    },
    middleware : [logMiddleware, axiosMiddleware]
});