import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import NavBar from './components/NavBar';

export default function App() {
  return (
    <View style={styles.container}>
      <Header titulo="Mi Super Super App" />
      <NavBar />
      <Main content="Contenido Principal de La App" />
      <Footer texto="El texto de mi footer"></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
