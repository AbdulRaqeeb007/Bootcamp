import React from "react";
import "../App.css"
import { useState ,useContext } from "react";
import {transContext} from "./tranContext"
export  const Child = ()=>{
    // let [amount, setamount] = useState({ amount: [1,2], tran: ['a','b'] });
    let [text, setText] = useState();
    let [cash, setCash] = useState();
    let [income , setIncome] = useState(0);
    let [expense,setExpence] = useState(0) ;
    let [balance , setBalance] = useState(0);
    let transections = useContext(transContext);
    // console.log(transections);
    let transection = transections.transection
    let tranF = transections.addTransection;
    let add =()=>{
        tranF({
            amount:parseInt(cash.value),
            dec :text.value
        })
        if(parseInt(cash.value)>0){
            console.log("income", parseInt(cash.value)+1)
            setIncome(income+=parseInt(cash.value))
        }else{
            setExpence(expense+=parseInt(cash.value))

        }
        setBalance(income+expense)
        setText(text.value="")
        setCash(cash.value="")
        console.log("transection" , transection)
        // setamount(amount.amount.push(10))
        //   setamount(amount.amount.push(cash.target.value))
        //   setamount(amount.tran.push(text.target.value))
      
        //   console.log(amount)
        //    text.target.value =" " ;
        //    cash.target.value =" " 
        };
      
    return(
        <div>
            <h1>
        <u>Expence Tracker</u>
      </h1>
      <div className='data'>
        Your Balance <br />
        ${balance}
        
      </div>
      <div className='transection'>
        <div>
          INCOME <br /> ${income}
        </div><div>
          EXPENSE <br />${-expense}
        </div>
      </div>

      <div className='history'>
        History
        {
          transection.map((itm, idx) => {
            console.log(itm)
            return (
              <li key={idx} className='show'>{itm.dec} <span>{itm.amount}</span> </li>
            )
          })
        }
        <hr />
      </div>
      <div className='history'>
        Add Transection
        <hr />
        <label>Text</label> <br />
        <input name='text' onChange={(e) => { setText(e.target) }} type="text" />
        <label>Balance</label> <br />
        <input name='amount' onChange={(e) => { setCash(e.target) }} type="number" />
        <button onClick={() => { add() }}>Add Transection</button>
      </div>
        </div>
    )
}