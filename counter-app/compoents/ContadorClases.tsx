import { Component } from "react"
import { Button, Text, View } from 'react-native';

interface ContadorClasesState{
    clicks:number
}

class ContadorClases extends Component<{},ContadorClasesState>{
    constructor(props:any){
        super(props);

        this.state = {
            clicks : 0
            //otra "Esta es otra variable"
        }
    }

    reset(){
        this.setState({clicks:0});
    }

    render() {
        return (<View style={{ flex: 1, alignItems: 'center', justifyContent: "center", backgroundColor:"#ddd" }}>
        <Text>Usted Ha Hecho Click</Text>
        <Text style={{ fontSize: 30 }}>{this.state.clicks}</Text>
        <Text>Veces</Text>
        <View style={{  flexDirection: 'row' }}>
            <Button title='Reset' onPress={ this.reset.bind(this) }/>
            <Button title='+' onPress={()=>{ this.setState({clicks : this.state.clicks + 1})}} />
        </View>
    </View>)
    }
}

export default ContadorClases;