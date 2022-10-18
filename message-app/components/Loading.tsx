import { View, ActivityIndicator } from "react-native"
import { useSelector } from "react-redux"

export default ()=>{
    const loading = useSelector((state:any)=>state.loading);
    return  loading ? (<View style={{
        position: "absolute",
        alignItems:"center",
        justifyContent:"center",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "black",
        opacity: 0.8
      }}>
      <ActivityIndicator size={100} />
    </View>) : <></>
}