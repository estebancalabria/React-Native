import AgregarTarea from "../components/AgregarTarea";
import { connect } from "react-redux";
import * as Creators from "../actions/action-creators";

function mapStateToProps(state: any) {
    return {}
}

function mapDispathToProps(dispatch: any) {
    return {
        onAgregarTarea: (nombre: string) => {
            let accion = Creators.agregarTarea(nombre);
            dispatch(accion);
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(AgregarTarea)