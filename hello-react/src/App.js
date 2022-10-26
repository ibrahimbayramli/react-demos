import './App.css';
import React from "react"
import Header from './components/Header'

const name="İbrahaim"
const surname="BAYRAMLI"
const isLoggedIn=false


function App(){  
 
  return (
    <div>
     <h1>merhaba</h1>
      
      <Header />

      <h1>{isLoggedIn ? `Benim adım ${name}, soyadım ${surname}`:"Giriş yapmadınız."}</h1>
      
     
    </div> 
  );
}

export default App;
