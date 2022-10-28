import {useState} from "react";
import './App.css';

import Counter from "./components/Counter";

function App() {
    const [isVisible,setIsvisible]=useState(true)

  return (
    <div className="App">
        {isVisible&&<Counter/>}
        <br/>
        <button onClick={()=>setIsvisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;
