import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import axios from 'axios';
import Character from './models/character.model';

const URL = "https://rickandmortyapi.com/api/character";

export default function App() {

  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    //TODO: Mostrar tambien como hacerlo con un async/await
    axios.get(URL).then((resp) => {
      setCharacters(resp.data.results);
    })
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>

        {
          characters.map((item) => (
            <View key={item.id} style={{ flexDirection: "row", margin: 2 }} >
              <Image style={{ width: 100, height: 100, marginEnd: 10 }} source={{ uri: item.image }} />
              <View style={{flexDirection:"column"}}>
                <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                  {item.name}
                </Text>
                <Text style={{fontSize:17, color:(item.status==="Alive"?"green":"red")}}>
                  {item.status}
                </Text>
                <Button title="Mas Informacion..." />
              </View>
            </View>
          ))
        }
      </View>
    </ScrollView>
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
