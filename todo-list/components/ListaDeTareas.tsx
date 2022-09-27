import { Text, FlatList, View } from "react-native";

const ListaDeTareas = ({ tareas }:any) => {
    return (
        <View>
            <Text style={{ fontSize: 50 }}>
                Lista De Tareas:
                </Text>
            <FlatList
                data={tareas}
                renderItem={({ item }) => (
                    <View style={{
                        flexDirection: "row",
                        padding: 10
                    }}>
                        <Text style={{ fontSize: 30 }}
                            key={item.id}>
                            {item.nombre}
                        </Text>
                    </View>
                )}
                ItemSeparatorComponent={() =>
                (<View style={{
                    borderBottomWidth: 1,
                    borderBottomColor: "back"
                }}>
                </View>)}
            />
        </View>
    )
}

export default ListaDeTareas;