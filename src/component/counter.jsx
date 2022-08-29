import React, { useState }  from "react";
import Count from "./count";
function Counter(params) {
    let [count , setState] = useState(0);
    return(
        <><Count count = {count}/>
        <button onClick={()=>{setState(++count)}}>Increment</button>
        <button onClick={()=>{setState(--count)}}>Decrement</button></>

    )
    
}

export default Counter