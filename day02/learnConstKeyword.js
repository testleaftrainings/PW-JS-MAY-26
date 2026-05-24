// part 1: declaration  --> const  firstName
// part 2 : initialization --> =
const course ="Cypress" // Uncaught SyntaxError: Missing initializer in const declaration
console.log(course)
// part 3 : reinitialization is not allowed in the const
//course="Selenium"
//console.log(course) // TypeError: Assignment to constant variable.
// part 4 : redeclaration is not allowed in const
//const course="Playwright" // SyntaxError: Identifier 'course' has already been declared
// part 5 : hoisting is not allowed in const
// console.log(courseDuration) // ReferenceError: Cannot access 'courseDuration' before initialization
// const courseDuration=" 2 months"
// part 6 : scope restricted to  block
function greetUser(){ 
{ // scope of the block
  const empNation="India"   // local reference    
}
console.log(empNation) // ReferenceError: empNation is not defined
}
greetUser()