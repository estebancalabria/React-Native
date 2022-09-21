import { useContext } from "react"
import { Text } from "react-native"
import CounterContext from "./CounterContext";

export default () => {

     const context = useContext(CounterContext);

    return (<Text style={{fontSize:20, alignSelf:"center"}}>
        (F) El valor del contador es : {context.value}
    </Text>)
}