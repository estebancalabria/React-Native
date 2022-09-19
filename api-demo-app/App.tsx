import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import axios from 'axios';
import Character from './models/character.model';
import CharacterView from './components/CharacterView';
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterDetail from './components/CharacterDetail';

const URL = "https://rickandmortyapi.com/api/character";
const Stack = createNativeStackNavigator();

export default function App() {

  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    //TODO: Mostrar tambien como hacerlo con un async/await
    axios.get(URL).then((resp) => {
      setCharacters(resp.data.results);
    })
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Rick And Morty Chars'>
          {
            ({navigation}) => (

                <ScrollView>
                  <View style={styles.container}>
                    {
                      characters.map((item, index) => 
                      (<CharacterView key={item.id} item={item} index={index} navigation={navigation} />))
                    }
                  </View>
                </ScrollView>
            )
          }
        </Stack.Screen>
        <Stack.Screen name='Details' component={CharacterDetail} />
      </Stack.Navigator>
    </NavigationContainer>
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
