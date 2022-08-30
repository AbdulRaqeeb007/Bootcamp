import logo from './logo.svg';
import './App.css';
import Parent from './component/parent';
import Counter from './component/counter';
import counter_context from './component/counter _context';
import { useState } from 'react';
import Counter_Reducer from './component/redicercounter';
function App() {
  let Counter_state = useState(20)
  return (
    <div className="App">
     <Parent/>
     <hr/>
     <h1>Passing State in Context</h1>
      <counter_context.Provider value={Counter_state}>
        <Counter/>
      </counter_context.Provider>

      <hr/>

      <h1>Use Reducer COntext</h1>
      <Counter_Reducer/>
      </div>  
  );
}

export default App;
