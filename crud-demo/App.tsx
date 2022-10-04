import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PokemonForm from './screens/PokemonForm';
import PokemonList from './screens/PokemonList';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pokemones" component={PokemonList} />
        <Stack.Screen name="Formulario" component={PokemonForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


