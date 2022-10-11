import { View, Text, Pressable, Button, Alert } from "react-native";
import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonModel } from "../models/pokemon.model";
import { FontAwesome } from "@expo/vector-icons";
import { POKE_URL } from "../utils/urls";

export default ({ navigation, route }: any) => {
    //const pokes = data;
    const [pokes, setPokes] = useState<PokemonModel[]>([]);
    useEffect(() => {
        axios.get(POKE_URL)
            .then((resp) => { setPokes(resp.data) })
            .catch((err) => { Alert.alert(JSON.stringify(err)) })
    }, []);

    useEffect(() => {
        navigation.addListener("focus", () => {
            axios.get(POKE_URL)
                .then((resp) => { setPokes(resp.data) })
        })
    }, [navigation])


    return <View style={{ flex: 1 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginEnd: 30 }}>
            <Text></Text>
            <Text>Nombre</Text>
            <Text>Tipo</Text>
            <Text>Vida</Text>
        </View>
        {
            pokes.map((poke) => (
                <View key={poke.id} style={{ flexDirection: "row", justifyContent: "space-around", marginEnd: 30 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <Pressable style={{ padding: 5, marginEnd: 10 }}
                            onPress={
                                () => { navigation.navigate("Formulario", { id: poke.id }) }
                            }>
                            <FontAwesome name="pencil" />
                        </Pressable>
                        <Pressable style={{ padding: 5 }}
                            onPress={() => {
                                Alert.alert("Confirmacion",
                                    `Desea eliminar a ${poke.nombre}`,
                                    [
                                        {
                                            text: "ok",
                                            onPress: () => {
                                                axios.delete(POKE_URL + "/" + poke.id).then(() => {
                                                    axios.get(POKE_URL)
                                                        .then((resp) => { setPokes(resp.data) })
                                                })
                                            }
                                        },
                                        {
                                            text: "cancel"
                                        }
                                    ])

                            }}>
                            <FontAwesome name="trash" />
                        </Pressable>
                    </View>
                    <Text>{poke.nombre}</Text>
                    <Text>{poke.tipo}</Text>
                    <Text>{poke.hp}</Text>
                </View>
            ))
        }
        <Pressable style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#ee6e73',
            position: 'absolute',
            bottom: 10,
            right: 10
        }} onPress={() => {
            navigation.navigate("Formulario")
        }}>
            <FontAwesome style={{top:"30%", left:"30%", fontSize:30}} name="plus" />
        </Pressable>
    </View>
}