import { View, TextInput, Button } from "react-native";
import { useState } from "react";

export default ({onAgregarTarea}:any)=>{
    
  const [nuevaTarea, setNuevaTarea] = useState("");

    return (<View>
    <TextInput style={{ borderWidth: 1, padding: 5 }}
        placeholder='Nueva Tarea...'
        value={nuevaTarea}
        onChangeText={(text) => { setNuevaTarea(text) }} />
      <Button title='Agregar Tarea'
        onPress={() => {
            onAgregarTarea(nuevaTarea)
        }} />
    </View>)
}