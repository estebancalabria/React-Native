import { Button, Text, View } from 'react-native';
import { useState } from "react";
import { useWindowDimensions } from 'react-native';

const ContadorFuncional = (props:any) => {

    console.log("Componente Renderizado");

    const window = useWindowDimensions();
    const [clicks, setClicks] = useState<number>(0);

    return (<View style={{ flex: 1, alignItems: 'center', justifyContent: "center", backgroundColor:"#eee" }}>
        <Text>Usted Ha Hecho Click</Text>
        <Text style={{ fontSize: 30 }}>{clicks}</Text>
        <Text>Veces</Text>
        <View style={{ width: window.width /2, flexDirection: 'row', justifyContent:"space-evenly" }}>
            <Button title='Reset' onPress={()=>{ setClicks(0) }} />
            <Button title='+' onPress={() => { setClicks(prevState => prevState+1) /*setClicks(clicks + 1)*/ }} />
        </View>
    </View>)
}

export default ContadorFuncional; 