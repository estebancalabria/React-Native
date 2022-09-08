import { Text, View, Image } from 'react-native';
import layout from '../styles/layout';

const Main = ({ content }) => {
    return (<View style={[layout.main, {justifyContent:"center"}]}>
        <Text>{content}</Text>
        <Image style={{ width: "100%", height: 200, resizeMode:"stretch" }}
            source={{ uri: "https://picsum.photos/200" }}></Image>
    </View>)
}

export default Main;