import { StatusBar } from 'expo-status-bar';
import { Button, Keyboard, StyleSheet, Text, TextInput, View, FlatList, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import laUnicaVerdad from './store/store';
import ListaDeTareas from './containers/ListaDeTareas.container';
import TotalTareas from './containers/TotalTareas.container';
import AgregarTarea from './components/AgregarTarea';


export default function App() {

  const [tareas, setTareas] = useState([
    { id: 1, nombre: "Comprar La Despensa", done: false },
    { id: 2, nombre: "Jugar Nintendo", done: false },
    { id: 3, nombre: "Estudiar Redux", done: false }]);

  const [nuevaTarea, setNuevaTarea] = useState("")

  return (
    <Provider store={laUnicaVerdad}>
      <View style={styles.container}>
        <TotalTareas />
        <View style={{ borderBottomWidth: 1, borderBottomColor: "back" }}></View>
        <ListaDeTareas />
        <AgregarTarea onAgregarTarea={(n:string)=>{Alert.alert(n)}} />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
