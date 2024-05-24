
import React, { useState } from "react";
import Counter from "./Counter";
 import './../styles/App.css';
 

 

const App = () => {
  let [Counter,setCounter]=useState(0);

 
  return (
    <div>
       
            <p>Button clicked {Counter} times</p>
            <button onClick={()=>setCounter(Counter+1)}>click me</button>
    </div>
  )
}

export default App
