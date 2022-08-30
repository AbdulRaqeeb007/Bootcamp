const CounterReducer = (state , action )=>{
    switch (action){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
    }

}

export default CounterReducer