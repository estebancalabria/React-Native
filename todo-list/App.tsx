import { StatusBar } from 'expo-status-bar';
import { Button, Keyboard, StyleSheet, Text, TextInput, View, FlatList, Pressable } from 'react-native';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Provider } from 'react-redux';
import laUnicaVerdad from './store/store';
import ListaDeTareas from './components/ListaDeTareas';


export default function App() {

  const [tareas, setTareas] = useState([
    { id: 1, nombre: "Comprar La Despensa", done: false },
    { id: 2, nombre: "Jugar Nintendo", done: false },
    { id: 3, nombre: "Estudiar Redux", done: false }]);

  const [nuevaTarea, setNuevaTarea] = useState("")

  return (
    <Provider store={laUnicaVerdad}>
      <View style={styles.container}>
        <View style={{ borderBottomWidth: 1, borderBottomColor: "back" }}></View>



        <View style={{ borderBottomWidth: 1, borderBottomColor: "back" }}></View>
        <ListaDeTareas />
        <TextInput style={{ borderWidth: 1, padding: 5 }}
          placeholder='Nueva Tarea...'
          value={nuevaTarea}
          onChangeText={(text) => { setNuevaTarea(text) }} />
        <Button title='Agregar Tarea'
          onPress={() => {
            setTareas([...tareas, {
              id: Math.max(...tareas.map(item => item.id), 0) + 1,
              nombre: nuevaTarea,
              done: false
            }]);
            setNuevaTarea("");
            Keyboard.dismiss();
          }} />
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