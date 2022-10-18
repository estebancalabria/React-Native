import { Text, TouchableOpacity, View, Alert } from "react-native"
import { useSelector } from "react-redux"


export default () => {
    const count = useSelector(
        (state: any) => state.mensajes.length);

    return (<View style={{flex:1, marginTop:50}}>
        <Text style={{ fontSize: 26 }}>
            Mensajes : {count}
        </Text>
        <TouchableOpacity onPress={()=>{Alert.alert("Click")}}>
            <Text style={{fontSize:20}}>
                Presioname si podes
            </Text>
        </TouchableOpacity>
    </View>)
}