import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import AddMessage from './components/AddMessage';
import MessageCount from './components/MessageCount';
import store from "./store/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MessageCount />
        <AddMessage />
      </View>
    </Provider>
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
