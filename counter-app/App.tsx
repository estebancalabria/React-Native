import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Cabecera from './compoents/Cabecera';
import ContadorFuncional from "./compoents/ContadorFuncional";
import ContadorClases from "./compoents/ContadorClases";

export default function App() {

  const [clicks, setClicks] = useState<number>(0);

  const width: number = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <Cabecera />
      <ContadorFuncional /> 
      <ContadorClases />
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
