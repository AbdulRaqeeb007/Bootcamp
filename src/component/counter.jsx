import React, { useContext, useState }  from "react";
import Count from "./count";
import counter_context from "./counter _context";
function Counter(params) {
    let [count , setState] = useContext(counter_context);
        // let counter  = useContext(counter_context);
        // console.log(counter[0])
    return(
        <><Count count = {count}/>
        <button onClick={()=>{setState(++count)}}>Increment</button>
        <button onClick={()=>{setState(--count)}}>Decrement</button>
        </>

    )
    
}

export default Counter;