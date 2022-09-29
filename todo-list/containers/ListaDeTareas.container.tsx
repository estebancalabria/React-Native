import ListaDeTareas, { IListaDeTareasProps } from "../components/ListaDeTareas";
import {connect} from "react-redux";
import { eliminarTarea } from "../actions/action-creators";

function mapStateToProps(state:any){
    return {
        tareas : state.tareas
    }
}

function mapDispathToProps(dispatch:any){
    return {
        onEliminarTarea : (id:number)=>{
            let accion = eliminarTarea(id);
            dispatch(accion);
        }
    }
}


export default connect<IListaDeTareasProps>(mapStateToProps,mapDispathToProps)(ListaDeTareas);