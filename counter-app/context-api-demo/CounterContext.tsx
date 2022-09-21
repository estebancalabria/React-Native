import React from "react";

interface ICounterContext{
    value:number;
    incrementar : ()=>void;
    decrementar : ()=>void;
}

export default React.createContext<ICounterContext>({
    value:0,
    incrementar:()=>{}, 
    decrementar:()=>{}
})