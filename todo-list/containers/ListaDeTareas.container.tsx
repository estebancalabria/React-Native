import ListaDeTareas from "../components/ListaDeTareas";
import {connect} from "react-redux";

function mapStateToProps(state:any){
    return {
        tareas : state.tareas
    }
}

export default connect(mapStateToProps)(ListaDeTareas);