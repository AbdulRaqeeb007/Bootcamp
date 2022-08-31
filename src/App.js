import logo from './logo.svg';
import './App.css';
import Parent from './component/parent';
import Counter from './component/counter';
import counter_context from './component/counter _context';
import { useContext, useState } from 'react';
import Counter_Reducer from './component/redicercounter';
import {transContext} from './epence/tranContext';
import { Child } from './epence/chil';
import { TransectionProvider } from './epence/tranContext';

function App() {
  return (

    <div className="App">
      <TransectionProvider>
        <Child/>
      </TransectionProvider>

    </div>
  );
}


export default App;
