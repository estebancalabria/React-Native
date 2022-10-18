import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ActivityIndicator, Keyboard, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';
import AddMessage from './components/AddMessage';
import Loading from './components/Loading';
import MessageCount from './components/MessageCount';
import store from "./store/store";

export default function App() {

  const [blockScr, setBlockScr] = useState(false);

  Keyboard.addListener("keyboardDidShow", () => {
    setBlockScr(true);
  })

  Keyboard.addListener("keyboardDidHide", () => {
    setBlockScr(false);
  })


  return (
    <Provider store={store}>
      <View style={styles.container}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
          <MessageCount />
          {blockScr && <View style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            opacity: 0.5
          }}></View>}
        </KeyboardAvoidingView>
        <AddMessage />
        <Loading />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
