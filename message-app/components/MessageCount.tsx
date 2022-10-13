import { Text } from "react-native"
import { useSelector } from "react-redux"


export default ()=>{
    const count = useSelector( 
        (state:any) => state.mensajes.length);

    return (<Text style={{fontSize:26}}>
        Mensajes : {count}
    </Text>)
}