import React from "react";
import { useContext } from "react";
import counter_context from "./counter _context";
export default function Child (){
    let context_data = useContext(counter_context)
    console.log(context_data.a)
    return (
        <div>
            <h1>This Is Child And  UseContext Value is {context_data.a}</h1>
            
        </div>
    )
}