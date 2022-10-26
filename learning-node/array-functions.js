const users=[
    {   name:"Mehmet",
        age:18
    },
    {   name:"Mehmet",
        age:29
    },
    {   name:"Murat",
        age:3        
    }

]

/*
    * push
    * map
    * find
    * filter
    * some
    * every
    * includes
*/

//? push
// users.push("Ayşe")
// users.push("Ayşe")

//? map
// for(let i=0;i<users.length;i++){
//     console.log(users[i])
// }
// users.map((item)=>{
//     console.log(item.name)
// })

//? find
// const findIt=users.find((item)=>item.name==="Mehmet" && item.age>20)

// console.log(findIt)

//? filte

// const filtered=users.filter((item)=> item.name==="Mehmet" && item.age<20)
// console.log(filtered)


//? some
// const some=users.some((item)=> item.age===18)
// console.log(some)

//? every
// const every=users.every((item)=> item.age>5)

// console.log(every)

//? includes
const meyveler=["elma","armut","muz"]
const isIncluded=meyveler.includes("armut")
console.log(isIncluded)


// console.log(users)

