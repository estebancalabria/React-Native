import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Cabecera from './compoents/Cabecera';

export default function App() {

  const [clicks, setClicks] = useState<number>(0);

  const width: number = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Cabecera />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
        <Text>Usted Ha Hecho Click</Text>
        <Text style={{ fontSize: 30 }}>{clicks}</Text>
        <Text>Veces</Text>
        <View style={{ flexDirection: 'row' }}>
          <Button title='Reset' />
          <Button title='+' onPress={()=>{setClicks(clicks+1)}}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
