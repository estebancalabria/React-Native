import { configureStore } from "@reduxjs/toolkit";
import { ACT_ADD_MSG, ACT_INIT_MSG, BEGIN_LOAD, END_LOAD } from "../actions/action-types";
import axiosMiddleware from "../middleware/axiosMiddleware";
import logMiddleware from "../middleware/logMiddleware";
import thunk from "redux-thunk";
import { initMensajes } from "../actions/action-creators";

const store = configureStore({
    preloadedState : {
        loading:false,
        mensajes : []
    }, 
    reducer : (state, action) => {
        console.log("Reducer Action", action);
        let newState = {...state};
        switch (action.type) {
            case BEGIN_LOAD:
                newState.loading = true;
                break;
            case END_LOAD:
                newState.loading = false;
                break;
            case ACT_ADD_MSG:
                newState.mensajes = [...newState.mensajes,
                {
                    id : newState.mensajes.length+1,
                    contenido : action.payload
                }]
                break;
            case ACT_INIT_MSG : 
                newState.mensajes = action.payload;
                break;
            default:
                break;
        }
        return newState;
    },
    middleware : [logMiddleware, thunk]
});

store.dispatch(initMensajes());

export default store;