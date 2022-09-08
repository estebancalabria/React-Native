import { Text, View } from 'react-native';
import { Dimensions } from 'react-native';

export default ()=>{
    const width: number = Dimensions.get("window").width;

    return (<View style={{
        flex: 0.4, backgroundColor: "red",
        borderBottomStartRadius: width,
        borderBottomEndRadius: 50
      }}>
        <View style={{
          flex: 0.7,
          backgroundColor: "yellow",
          borderBottomEndRadius: width * 2,
          borderBottomStartRadius: width / 2
        }}>
          <Text style={{ fontSize: 60, marginStart: 30 }}>Counter</Text>
          <Text style={{ fontSize: 50, alignSelf: "flex-end", marginEnd: 130 }}>App</Text>
        </View>
      </View>);
}