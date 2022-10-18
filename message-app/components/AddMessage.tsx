import { useState } from "react"
import { Button, TextInput, View } from "react-native"
import { useDispatch } from "react-redux";
import { addMensaje } from "../actions/action-creators";

export default ()=>{
    const [msg, setMsg] = useState("");
    const dispatch = useDispatch();

    return (<View style={{flexDirection:"row", padding:5}}>
        <TextInput onChangeText={setMsg} 
            value={msg}
            placeholderTextColor="grey"
            
            placeholder=" Ingrese una tarea.."
            style={{borderColor:"black", 
            borderWidth:1, 
            fontSize:24,
            flex:1}} />
        <Button title="+" onPress={()=>{
            dispatch(addMensaje(msg));
            setMsg("");
        }}></Button>
    </View>)
}