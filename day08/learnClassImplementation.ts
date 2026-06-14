class FirstProgram{
// what is class ? it is blueprint or template within which the properties can be packed
// Global variable
fname:string // declaration // Global variable

// signature to create Method --> function
empInfo(isInsured : boolean):void{ // argumented
// local variable    
// 'this' is the keyword --> it represent the class level reference
console.log(`The employee name is ${this.fname}, status of midterm adjustment is ${isInsured}`) // 
}
constructor(fname:string){ // when a new object is created, constructor invoked automatically
    // to initialize the global variable[under scope of the class]
    console.log("This is arugment constructor")
    this.fname=fname // intialization
}

}

// syntax to create a object --> at run time it will create a new memory 
// new --> keyword it invokes a call to create a new memory at run time
// FirstProgram() -->constructor of the class
const obj =new  FirstProgram("Bhuvanesh")
obj.empInfo(true)
console.log(obj.fname)

// multiple object's can be created 
const obj1 =new  FirstProgram("Vinoth")
obj1.empInfo(false)
console.log(obj1.fname)
