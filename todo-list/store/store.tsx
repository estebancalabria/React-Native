import { configureStore } from "@reduxjs/toolkit";
import Tarea from "../model/tare";
import reducer from "../reducer/reducer";

interface IStore{
    tareas:Tarea[]
}

export default configureStore({
    reducer : reducer,
    preloadedState: {
        tareas : [
            { id: 1, nombre: "T1", done: false },
            { id: 2, nombre: "T3", done: false },
            { id: 3, nombre: "T3", done: false }
        ]
    }
})