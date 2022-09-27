
export default function reducer(state:any, action:any){
    let newState = {...state};
    console.log(action.type);
    return newState;
}