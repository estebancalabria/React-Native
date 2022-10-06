import {View, Text, Pressable, Button, Alert} from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonModel } from "../models/pokemon.model";
import { FontAwesome } from "@expo/vector-icons";
//import { data } from "../data/data";

export default ({navigation}:any)=>{
    //const pokes = data;
    const [pokes, setPokes] = useState<PokemonModel[]>([]);
    useEffect(()=>{
        axios.get("https://2b96-190-225-137-77.sa.ngrok.io/pokemones")
        .then((resp)=>{ setPokes(resp.data) })
        .catch((err)=>{ Alert.alert(JSON.stringify(err))})
    },[]);


    return <View style={{flex:1}}>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginEnd:30}}>
            <Text></Text>
            <Text>Nombre</Text>
            <Text>Tipo</Text>
            <Text>Vida</Text>
        </View>
        {
            pokes.map((poke)=>(
                <View key={poke.id} style={{flexDirection:"row", justifyContent:"space-around", marginEnd:30}}>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Pressable style={{padding:5, marginEnd:10}} onPress={()=>{Alert.alert("Editar")}}>
                            <FontAwesome name="pencil" />
                        </Pressable>
                        <Pressable style={{padding:5}}  onPress={()=>{Alert.alert("Eliminar")}}>
                            <FontAwesome name="trash" />
                        </Pressable>
                    </View>
                    <Text>{poke.nombre}</Text>
                    <Text>{poke.tipo}</Text>
                    <Text>{poke.hp}</Text>
                </View>
            ))
        }
        <Button title="+" onPress={()=>{
            navigation.navigate("Formulario")
        }}/>
    </View>
}