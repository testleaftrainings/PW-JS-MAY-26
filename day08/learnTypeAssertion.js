// type assertion ?
// any and unknown --> it can accept any value with different datatype
function browserSetup(launchBrower) {
    switch (launchBrower) { // literal narrowing
        case "edge":
            console.log("edge browser is launched");
            break;
        case "chrome":
            console.log("chrome browser is launched");
            break;
        case "firefox":
            console.log("firefox browser is launched");
            break;
        default:
            console.log("unsupported browser");
            break;
    }
}
browserSetup("chrome");
//2) type assertion
var Apiresponse = "Success";
//Apiresponse=200 // number
// type asserting using as keyword 
//console.log((Apiresponse as string ).toUpperCase())
// type asseting using <datatype>variableName
console.log(Apiresponse.toUpperCase());
