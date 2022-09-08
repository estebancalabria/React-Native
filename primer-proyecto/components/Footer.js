import React from "react"
import { Text, View } from 'react-native';
import layout from "../styles/layout";

class Footer extends React.Component {
    render() {
        return (
            <View style={[layout.footer,
            { backgroundColor: '#faa' }]}>
                <Text>{this.props.texto}</Text>
            </View>
        )
    }
}

export default Footer;