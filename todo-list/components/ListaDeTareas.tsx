import { Text, FlatList, View, Pressable } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import Tarea from "../model/tare";
import theme from "../styles/theme";

export interface IListaDeTareasProps{
    tareas : Tarea[],
    onEliminarTarea? : (id:number)=>{}
}


const ListaDeTareas = ({ tareas, onEliminarTarea }: IListaDeTareasProps) => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 50 }}>
                Lista De Tareas:
            </Text>
            <FlatList
                data={tareas}
                ListEmptyComponent={()=>(
                <View style={{...theme.center, aspectRatio:1}}>
                    <Text style={{...theme.center, ...theme.h1}}>Lista Vacia</Text>
                </View>
                )}
                renderItem={({ item }) => (
                    <View key={item.id} style={{
                        flex: 1,
                        flexDirection: "row",
                        padding: 10
                    }}>
                        <Pressable style={{
                            borderWidth: 1, borderRadius: 35, marginEnd: 10,
                            backgroundColor: "red"
                        }}
                            onPress={() => { 
                                onEliminarTarea!(item.id)
                            }}>
                            <FontAwesome name='trash' style={{
                                marginStart: 5, fontSize: 35,
                                marginEnd: 5, padding: 5
                            }} />
                        </Pressable>
                        <Text style={{ fontSize: 30 }}>
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