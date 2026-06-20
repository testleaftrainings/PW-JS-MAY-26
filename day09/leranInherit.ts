// what is mean by inheritance ?
// it increases the code reusability 
// it restricts the code duplication
// it is possible  using extends keyword
// it creates a structure --> parent class [reusable code] , child class[implementor]

export class PlaywrightWrapper{
// by default all methods without explict access modifiers is considered as public methods
public clickElement(){
console.log("Element clicked successfully")
}
public takeSnap(){
console.log("screenshot  captured successfully")
}
public captureToken(){
console.log("Token is stored within storage file")
}
public fill(){
    console.log("value entered successfully")
}
}