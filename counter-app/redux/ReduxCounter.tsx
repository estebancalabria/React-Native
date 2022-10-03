import { View, Text, Button } from "react-native"
import { Provider, useSelector, useDispatch, connect } from "react-redux";
import { createStore } from "redux";

//actions
const ACT_INC = "ACT_INC";
const ACT_DEC = "ACT_DEC";
const ACT_RESET = "ACT_RESET";

//action-creators
const actionInc = () => ({ type: ACT_INC, payload: 1 });
const actionDec = () => ({ type: ACT_DEC, payload: 1 });
const actionReset = () => ({ type: ACT_RESET, payload: 0 });

//reducer state = { count : 0}
const reducer = (state: any, action: any) => {
    let newState = { ...state };
    switch (action.type) {
        case ACT_INC:
            newState.count++; //newState.count += action.payload
            break;
        case ACT_DEC:
            newState.count--;
            break;
        case ACT_RESET:
            newState.count = 0;
            break;
        default:
            break;
    }
    return newState;
}

//store
const store = createStore(reducer, { count: 0 });

//componentes
const Contador = ({ count }: any) => {
    return <Text>Contador : {count}</Text>
}

const Incrementar = ({ onIncrementar }: any) => {
    return <Button title="+" onPress={onIncrementar} />
}

const Decrementar = ({ onDecrementar }: any) => {
    return <Button title="-" onPress={onDecrementar} />
}

const Reset = ({ count,onReset }: any) => {
    return <Button title={"Reset " + count} 
                    onPress={onReset} />
}


//containers con hooks
const ContadorRedux = () => {
    const count = useSelector<any>(state => state.count);
    return <Contador count={count} />
}

const IncrementarRedux = ()=>{
    const dispatch = useDispatch();
    return (<Incrementar onIncrementar={()=>{
        let accion = actionInc();
        dispatch(accion);
    }} />)
}

//container con HighOrderComponents
function mapDispatchToPropsDec(dispatch:any){
    return {
        onDecrementar : ()=>{
            let accion = actionDec();
            dispatch(accion);
        }
    }
}
const DecrementarRedux = connect(null, mapDispatchToPropsDec)(Decrementar);

//reset con HighOrderComponent
const mapProps = (state:any) => ({count : state.count});
const mapDispatch = (dispatch:any) => ({onReset: ()=>{dispatch(actionReset())}});
const ResetRedux = connect(mapProps,mapDispatch)(Reset);

export default () => {
    return <Provider store={store}>
        <View style={{
            display: "flex", flex: 1,
            justifyContent: "center", 
            alignItems: "center"
        }}>
            <ContadorRedux />
            <IncrementarRedux />
            <DecrementarRedux />
            <ResetRedux />
        </View>
    </Provider>
}