import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";


const App = () => {
 
  let [count, setCount] = useState(0);

  const handleChange = (e)=>{
    setCount(e.target.value)
  }
  const IncNum = () => {
    setCount(count + 1);
  };

  const DncNum = () => {
    setCount(count - 1);
  };


  return (
   <>
      <h1 className="heading"></h1>

      <div className="container">
        <button className="btn" onClick={DncNum}>
          -
        </button>
        <input className="heading1" value={count} onChange={handleChange}/>
        <button className="btn1" onClick={IncNum}>
          +
        </button>
      </div>
     
    </>
  );
};

export default App;
