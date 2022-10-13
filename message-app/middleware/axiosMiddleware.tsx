import axios from "axios";
import { ACT_ADD_MSG } from "../actions/action-types";

const axiosMiddleware = (store: any) => (next: any) => (action: any) => {
    if (action.type == ACT_ADD_MSG) {
        axios.post("https://0df2-190-194-78-53.sa.ngrok.io/mensajes",
            {
                contenido: action.payload
            }).then((resp) => {
                next(action);
            })
    } else {
        next(action);
    }
}

export default axiosMiddleware;