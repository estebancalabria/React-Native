import { View, Text, Image, useWindowDimensions } from "react-native"
import  Character from "../models/character.model";

export default (props:any)=>{

    var {item} = props.route.params;
    var dimensions = useWindowDimensions();
    //var char = props.royte.params.item;

    return (<View style={{justifyContent:"center", alignItems:"center"}}>
        <Image source={{uri:item.image}} 
            style={{width:dimensions.width, height:dimensions.height/2,resizeMode:"stretch" }} />
        <Text style={{fontSize: dimensions.fontScale * 40}}> {item.name}</Text>
        <Text style={{fontSize: dimensions.fontScale * 30}}>{item.species}</Text>
        <Text style={{fontSize: dimensions.fontScale * 25,  textAlign:"center"}} textBreakStrategy="balanced">
            From : {item.origin.name}
        </Text>
    </View>)
}