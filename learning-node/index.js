import slugify from "slugify";
import MyModule from "./my-module.js";

console.log(slugify("MEHABA DUNYA NASILSIN",{
    replacement:"-",
    lower:true
}))

var name="ibrahim";

console.log(`name: ${name}`)

console.log(MyModule(10,11))