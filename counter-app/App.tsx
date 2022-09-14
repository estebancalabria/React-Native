import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Cabecera from './compoents/Cabecera';
import ContadorFuncional from "./compoents/ContadorFuncional";
import ContadorClases from "./compoents/ContadorClases";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {

  const [clicks, setClicks] = useState<number>(0);

  const width: number = Dimensions.get("window").width;

  return (
    <NavigationContainer>
      <Cabecera />
      <Tab.Navigator screenOptions={{tabBarActiveTintColor:"red",  tabBarActiveBackgroundColor:"#efe"}}>
        <Tab.Screen name="Contador Funcional"
          component={ContadorFuncional}
          options={() => ({
            tabBarIcon: ({ color }) => (<FontAwesome name="clock-o" size={30} color={color} />)
          })} />
        <Tab.Screen name="Contador Clases" component={ContadorClases}
          options={(props)=>{
             return { 
                tabBarIcon : (props)=>{ return <FontAwesome name="picture-o" size={30} color={props.color} /> }
             }
          }}
        />
      </Tab.Navigator>
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
