import {View, Text, TextInput, Button, StyleSheet} from "react-native";
import { useState } from "react";


export default ()=>{
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("")
    const [vida, setVida] = useState(0)

    return <View style={{margin:15}}>
        <Text>Nombre:</Text>
        <TextInput style={styles.textInput} onChangeText={setNombre} />
        <Text>Tipo:</Text>
        <TextInput style={styles.textInput} onChangeText={setTipo}/>
        <Text>Vida</Text>
        <TextInput style={styles.textInput} keyboardType="number-pad" 
           onChange={(e)=>{setVida(+e.valueOf)}} />
        <Button title="confirmar" />
        <Text>{nombre}</Text>
        <Text>{tipo}</Text>
        <Text>{vida}</Text>
    </View>
}

const styles = StyleSheet.create({
    textInput : {
        borderColor : "grey",
        borderWidth: 1,
        marginBottom:5,
        padding:3
    }
})

