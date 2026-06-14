// access modifier ?
// 3 - AM 
// public --> it can accessed outside the class
// protected --> it can accessed by the child class [inheritance]
// private --> it can be accessed within that particular

// data enclosed with a variable or within method 
// framework --> Filename and class name should be same 
class BaseClass{
// by default all methods without explict access modifiers is considered as public methods
public clickElement(){
console.log("Element clicked successfully")
}

protected takeSnap(){
console.log("screenshot  captured successfully")
}

private captureToken(){
console.log("Token is stored within storage file")
}

public performTask(){
    this.takeSnap()
    this.captureToken()
}
}
const objBase = new BaseClass()
objBase.clickElement()
objBase.performTask()

// export import extends --> decrease the code duplication, increase the code reuseablility 