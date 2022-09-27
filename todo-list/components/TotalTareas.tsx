import { View, Text } from "react-native";
//import * as Native from "react-native";

export default ({total}:any) =>{
    return <View style={{alignItems:"flex-end"}}>
        <Text>Total Tareas {total} </Text>
    </View>
}