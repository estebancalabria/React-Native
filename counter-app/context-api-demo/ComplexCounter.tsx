import { Button, View, Text } from "react-native";
import CounterWithClass from "./CounterWithClass";
import CounterWithFunction from "./CounterWithFunction";
import CounterContext from "./CounterContext";
import { useState } from "react";
import BotoneraContador from "./BotoneraContador";

export default () => {

    const [context, setContext] = useState({
        value: 0,
        incrementar: () => { setContext(c => ({ ...c, value: c.value + 1 })) },
        decrementar: () => { setContext(c => ({ ...c, value: c.value - 1 })) },  
    })


    return (<CounterContext.Provider value={context}>
        <View>
            <CounterWithClass />
            <CounterWithFunction />
            <BotoneraContador />
        </View>
    </CounterContext.Provider>)
}