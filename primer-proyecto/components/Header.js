import { Text, View } from 'react-native';
import layout from '../styles/layout';

function Header({titulo}) {
    return (<View style={[ layout.header, {  
        justifyContent:"center",
        flexDirection:"row",
        backgroundColor: '#ffa',
        marginTop: 25 }]}>
        <Text style={{fontSize:30}}>{titulo}</Text>
    </View>)
}

export default Header;