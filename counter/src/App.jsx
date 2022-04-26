import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";


const App = () => {
 
  let [count, setCount] = useState(0);

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
        <input type="number" className="heading1" value={count}/>
        <button className="btn1" onClick={IncNum}>
          +
        </button>
      </div>
     
    </>
  );
};

export default App;
