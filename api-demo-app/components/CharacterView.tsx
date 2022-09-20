import Character from "../models/character.model";
import { useEffect, useRef } from "react";
import { Text, View, Image, Button, Animated } from 'react-native';

interface CharacterProps {
    item:Character,
    index:number,
    navigation:any
}

export default ({ item, index, navigation }:CharacterProps) => {

    const fadeValue = useRef(new Animated.Value(0)).current;

    useEffect(()=>{
        Animated.timing(fadeValue, {toValue:1, duration: Math.min(index*1000, 6000), useNativeDriver:true}).start()
    },[fadeValue])

    return (<Animated.View key={item.id} style={{ flexDirection: "row", margin: 2, opacity:fadeValue}} >
        <Image style={{ width: 100, height: 100, marginEnd: 10 }} source={{ uri: item.image }} />
        <View style={{ flexDirection: "column" }}>
            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                {item.name}
            </Text>
            <Text style={{ fontSize: 17, color: (item.status === "Alive" ? "green" : "red") }}>
                {item.status}
            </Text>
            <Button title="Mas Informacion..." onPress={()=>{navigation.navigate("Details", {item})}} />
        </View>
    </Animated.View>
    )
}