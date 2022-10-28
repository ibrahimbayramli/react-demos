import './App.css';
import React from "react"
import Header from './components/Header'
import User from "./components/User";

// const name="İbrahaim"
// const surname="BAYRAMLI"
// const isLoggedIn=false


function App(){  
 
  return (
    <div>
     {/*<h1>merhaba</h1>*/}
        <User name={"ibrahim"} surname={"bayramlı"} isLoggedIn={true}
        friends={["Ahmet","Tayfun","Gökhan","Ayşe","Fatma"]}
        />
      
      <Header />

    {/*<h1>{isLoggedIn ? `Benim adım ${name}, soyadım ${surname}`:"Giriş yapmadınız."}</h1>*/}
      
     
    </div> 
  );
}

export default App;
