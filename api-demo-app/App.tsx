import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

const URL = "https://rickandmortyapi.com/api/character";
/*const chars = [
  <Text key={1}>Rick Sanchez</Text>,
  <Text key={2}>Morty Smith</Text>,
  <Text key={3}>Esteban Calabria</Text>,
  <Text key={4}>Aldo</Text>,
]*/
const chars = [
  { id :1, name : "Rick"},
  { id :2, name : "Samuel"},
  { id :3, name : "Juan"},
  { id :4, name : "Hermes"},
  { id :5, name : "Daniel"},
]

export default function App() {

  /*const [characters, setCharacters] = useState<any[]>([]);
  useEffect(()=>{
    //TODO: Mostrar tambien como hacerlo con un async/await
    axios.get(URL).then((resp)=>{
      setCharacters(resp.data.results);
    })
  },[]);*/

  return (
    <View style={styles.container}>
      {
        chars.map((item)=>(<Text key={item.id}>{item.name}</Text>))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
