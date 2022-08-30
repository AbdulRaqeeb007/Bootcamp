import React, { useReducer } from "react";
import CounterReducer from "./counter_reducer";
const Counter_Reducer = ()=>{
    let [state , dispatch]  = useReducer(CounterReducer ,10)
    console.log(state)
    return (
        <div>
            <h1>This Is Couter Reducer {state}</h1>
            <button onClick={()=>{dispatch("increment")}}>Increment By Reducer</button>
            <button onClick={()=>{dispatch("decrement")}}>Decrement By Reducer</button>
        </div>
    )
}
export default Counter_Reducer