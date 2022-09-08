import { Button, View, Alert } from "react-native";
import layout from "../styles/layout";

export default (props)=>(
    <View style={[ layout.navbar,
        { flexDirection:"row", justifyContent:"space-around"  }]}>
        <Button title="Home" onPress={ 
            function(){ Alert.alert("Mensaje","Presionaste en Home")}
        } />
        <Button title="Contacto" onPress={
            ()=>{ Alert.alert("Mensaje","Presionaste en Contacto")}
        } />
    </View>
);