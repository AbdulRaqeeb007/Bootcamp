import TransReducer from "./tranReducer"
import { Children, createContext, useReducer } from "react";

let transection =  [
   
]
export const transContext = createContext(transection)

export const TransectionProvider =({children})=>{

    let [state , dispatch] = useReducer(TransReducer , transection)

    function addTransection(Obj) {
        console.log("Obj" , Obj)
        dispatch({
            type:"ADD",
            payload:{
                amount:Obj.amount,
                dec: Obj.dec
            }
        })
        
    }

    return (
        <transContext.Provider value={
         {transection:state , addTransection}   
        }>
            {children}
        </transContext.Provider>
    )
}