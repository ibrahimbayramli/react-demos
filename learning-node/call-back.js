import fetch from"node-fetch" ;
// setTimeout(()=>{
//     console.log("Merhaba")
// }, 5000)

// setInterval(()=>{
    
//     console.log("Merhaba");
    
// },1000)

fetch("https://jsonplaceholder.typicode.com/users/5")
.then((data)=>data.json())
.then((user)=>{
    console.log("Users yüklendi.",user);
    fetch("https://jsonplaceholder.typicode.com/posts/15")
    .then((data)=>data.json())
    .then((post)=>console.log(post));
});

async function getData(){
    const data=await (await fetch("https://jsonplaceholder.typicode.com/users")).json()
    console.log(data)
}

getData()