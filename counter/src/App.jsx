import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import CounterValue from "./components/CounterValue";

const App = () => {
  const [loading, setloading] = useState(false);

  let [count, setCount] = useState(0);

  const getcount = async () => {
    const response = await fetch(
      "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json"
    );

    const data = await response.json();
    console.log(data);
    const number = 1;
    setCount(number);
  };

  useEffect(() => {
    getcount();
  }, []);

const changeCountInInputField = (event) => {
  const currValue = parseInt(event.target.value);
  if(!isNaN(currValue)){
    setCount(currValue);
  }

  console.log(event.target.value);
  


  
 
};

  const IncNum = (event)=>{
    setCount(event.target.valuet+1);

  }

  const DecNum = ()=>{
    setCount(count-1);
  }


  return (
   <>
      <h1 className="heading">Hello I am Counter</h1>

      <div className="container">
        <button className="btn" onClick={DecNum}>
          -
        </button>
        <input type= "number" className= "heading1" value={count} onChange={changeCountInInputField}/>
        <button className="btn1" onClick={IncNum}>
          +
        </button>
      </div>
     <CounterValue count= {count}/>
    </>
  );
};

export default App;
