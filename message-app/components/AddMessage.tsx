import { useState } from "react"
import { Button, TextInput, View } from "react-native"
import { useDispatch } from "react-redux";
import { addMensaje } from "../actions/action-creators";

export default ()=>{
    const [msg, setMsg] = useState("");
    const dispatch = useDispatch();

    return (<View>
        <TextInput onChangeText={setMsg} value={msg} />
        <Button title="+" onPress={()=>{
            dispatch(addMensaje(msg));
            setMsg("");
        }}></Button>
    </View>)
}