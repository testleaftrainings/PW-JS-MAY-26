var FirstProgram = /** @class */ (function () {
    function FirstProgram(fname) {
        // to initialize the global variable[under scope of the class]
        console.log("This is arugment constructor");
        this.fname = fname; // intialization
    }
    // signature to create Method --> function
    FirstProgram.prototype.empInfo = function (isInsured) {
        // local variable    
        // 'this' is the keyword --> it represent the class level reference
        console.log("The employee name is ".concat(this.fname, ", status of midterm adjustment is ").concat(isInsured)); // 
    };
    return FirstProgram;
}());
// syntax to create a object --> at run time it will create a new memory 
// new --> keyword it invokes a call to create a new memory at run time
// FirstProgram() -->constructor of the class
var obj = new FirstProgram("Bhuvanesh");
obj.empInfo(true);
console.log(obj.fname);
// multiple object's can be created 
var obj1 = new FirstProgram("Vinoth");
obj1.empInfo(false);
console.log(obj1.fname);
