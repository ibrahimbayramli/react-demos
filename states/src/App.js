import Counter from "./components/Counter";

function App() {
    // const [name,setName]=useState("ibrahim")
    // const [age,setAge]=useState(29)
    // const [friends,setFriends]=useState(["Ahmet","Murat"])
    // const [address,setAddress]=useState({title:"İstanbul",zip:34756})
  return (
    <div className="App">
      {/*<h1>merhaba {name}</h1>*/}
      {/*  <h2>{age}</h2>*/}
      {/*  <button onClick={()=>setName("İBRAHİM")}>Change Name</button>*/}
      {/*  <button onClick={()=>setAge(age+1)}>Change Age</button>*/}
      {/*  <hr/>*/}
      {/*  <br/><br/>*/}

      {/*  {*/}
      {/*      friends.map((friend,index)=>(*/}
      {/*          <ul>*/}
      {/*              <li key={index}>{friend}</li>*/}
      {/*          </ul>*/}
      {/*      ))*/}
      {/*  }*/}

      {/*  <button onClick={()=>setFriends([...friends,"Ayşe"])}>Change Friends</button>*/}
      {/*  <hr/>*/}
      {/*  <br/><br/>*/}
      {/*  <h2>Address</h2>*/}
      {/*  <div>*/}
      {/*      {address.title} {address.zip}*/}
      {/*  </div>*/}
      {/*  <br/>*/}
      {/*  <button onClick={()=> setAddress({title: "Kars",zip: 36100})}>Change Address</button>*/}
      {/*  <hr/>*/}
      {/*  <br/><br/>*/}

        <Counter/>

    </div>

  );
}

export default App;
