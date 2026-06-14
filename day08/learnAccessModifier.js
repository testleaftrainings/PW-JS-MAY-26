// access modifier ?
// 3 - AM 
// public --> it can accessed outside the class
// protected --> it can accessed by the child class [inheritance]
// private --> it can be accessed within that particular
// data enclosed with a variable or within method 
// framework --> Filename and class name should be same 
var BaseClass = /** @class */ (function () {
    function BaseClass() {
    }
    // by default all methods without explict access modifiers is considered as public methods
    BaseClass.prototype.clickElement = function () {
        console.log("Element clicked successfully");
    };
    BaseClass.prototype.takeSnap = function () {
        console.log("screenshot  captured successfully");
    };
    BaseClass.prototype.captureToken = function () {
        console.log("Token is stored within storage file");
    };
    BaseClass.prototype.performTask = function () {
        this.takeSnap();
        this.captureToken();
    };
    return BaseClass;
}());
var objBase = new BaseClass();
objBase.clickElement();
objBase.performTask();
