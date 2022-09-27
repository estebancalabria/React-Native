import { useSelector } from "react-redux";
import TotalTareas from "../components/TotalTareas";

export default () => {
    const total = useSelector<number>((state: any) =>( state.tareas.length));
    return <TotalTareas total={total}></TotalTareas>
}