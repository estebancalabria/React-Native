import { useContext } from "react";
import { Button, View } from "react-native";
import CounterContext from "./CounterContext";

export default () => {

    const context = useContext(CounterContext)
    return (
        <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1 }}>
                <Button title="+" onPress={() => { context.incrementar() }} />
            </View>
            <View style={{ flex: 1 }}>
                <Button title="-" onPress={() => { context.decrementar() }} />
            </View>
        </View>)
}