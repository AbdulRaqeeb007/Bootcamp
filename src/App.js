import logo from './logo.svg';
import './App.css';
import Counter from './component/counter';
import { useState } from 'react';
function App() {
  let [isDay,setDay] = useState(true);

  return (
    <div className="App">
     <Counter/>
     <br/>
     <div className={`box ${isDay?'day':'night'}`}>
     <button onClick={()=>console.log(setDay(!isDay))} >Set {isDay ? "Night" :"Morning"}</button>
     </div>

    </div>
  );
}

export default App;
