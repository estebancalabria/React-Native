import { Text } from "react-native";
import React from "react";
import CounterContext from "./CounterContext";

export default class CounterWithClass extends React.Component {
    render() {
        return (<CounterContext.Consumer>
        {
            (context)=>(
                <Text style={{fontSize:20, alignSelf:"center"}}>
                    (C) El valor del contador es : {context.value}
                </Text>
            )
        }
        </CounterContext.Consumer>)
    }
}