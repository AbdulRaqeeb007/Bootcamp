import React from "react";

function Count(props){
    console.log(props)
    return(
        <h1>{props.count}</h1>
    )
}

export default Count;