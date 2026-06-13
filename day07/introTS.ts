// Statically typed

let firstName:string = "bhuvanesh"
console.log(firstName)
let phno:number =98676
let isInsured:boolean = true

function add(a:number,b:number): number{
   return a+b
}
console.log(add(873,43))
// typescript datatypes :

// any --> it will disable the typescripts static typing charactersitic
//let response:any ="Success"
//response=200
// console.log(response.toUpperCase()) --> exception shoot's at run time 

// unknown -->  it will enable the type validation
let response:unknown ="Success"
//response=200
if(typeof response === 'string' ){
console.log(response.toUpperCase())
}else{
    console.log("the received datatype is not string")
}

// never --> it returns nothing, cannot have a reachable end point, control is not returned to the caller
//  1. infinte 2. forcefully terminate the execution
// function stopFunction(message : string):never{
// throw new Error(message)
// }
// stopFunction("terimate the execution")

// tuple --> A fixed-length array with different data types at specific positions.
let mentorNames :[string,string,number] =["Vinoth","Gauthami",123]
// tuple ==> 0 === string
// tuple ==> 1 === string
// tuple ==> 2 === number