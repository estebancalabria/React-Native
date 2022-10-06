import {View, Text, TextInput, Button, StyleSheet, Alert} from "react-native";
import { useState } from "react";
import { POKE_URL } from "../utils/urls";
import {useEffect} from "react";
import axios from "axios";

export default ({route, navigation}:any)=>{

    const id = route.params ? route.params.id : null;
    //Alert.alert(Number(id).toString());
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [vida, setVida] = useState(0);

    useEffect(()=>{
        if (id){
            axios.get(POKE_URL + "/" + id).then((resp)=>{
                setNombre(resp.data.nombre);
                setTipo(resp.data.tipo);
                setVida(resp.data.hp);
            })
        }
    },[])

    return <View style={{margin:15}}>
        <Text>Nombre:</Text>
        <TextInput value={nombre} style={styles.textInput} onChangeText={setNombre} />
        <Text>Tipo:</Text>
        <TextInput value={tipo} style={styles.textInput} onChangeText={setTipo}/>
        <Text>Vida</Text>
        <TextInput value={vida.toString()} style={styles.textInput} 
           keyboardType="number-pad" 
           onChange={(e)=>{setVida(+e.valueOf)}} />
        <Button title="confirmar" onPress={()=>{
            if (id){
                axios.put(POKE_URL + "/" + id, {
                    id,
                    nombre,
                    tipo,
                    hp:vida}).then((resp)=>{
                        navigation.navigate("Pokemones",{mensaje:"Pokemon Actualizado"});
                    })
            }else{
                axios.post(POKE_URL, {nombre, tipo, hp :1000}).then(
                    (resp)=>{
                        navigation.navigate("Pokemones");
                    }
                )
            }
        }} />
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

