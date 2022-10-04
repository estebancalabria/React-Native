import {View, Text, Pressable, Button} from "react-native";
import { data } from "../data/data";

export default ({navigation}:any)=>{
    const pokes = data;

    return <View style={{flex:1}}>
        <View style={{flexDirection:"row", justifyContent:"space-between", marginEnd:30}}>
            <Text></Text>
            <Text>Nombre</Text>
            <Text>Tipo</Text>
            <Text>Vida</Text>
        </View>
        {
            pokes.map((poke)=>(
                <View key={poke.id} style={{flexDirection:"row", justifyContent:"space-between", marginEnd:30}}>
                    <Text></Text>
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