// part 1: declaration  --> var firstName
// part 2 : initialization --> ="Nithin"
var firstName="Nithin" // string
// part 3 : reinitialization 
firstName= 8765345 //number
firstName= true //boolean
//console.log(firstName)
// part 4 : redeclaration
var firstName="Keerthana"
console.log(firstName)
console.log(lastName) // hoisted
// part 5: hoisting
var lastName="G"
// Part 6 : scope restriction : var keyword is function scope
function greetUser(){ // scope of the function
{ // scope of the block
  var empNation="India"      
}
console.log(empNation) // ReferenceError: empNation is not defined // India // resource is leaked
}
greetUser()
//console.log(empNation) // ReferenceError: empNation is not defined
