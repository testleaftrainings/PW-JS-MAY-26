// type assertion ?
// any and unknown --> it can accept any value with different datatype


// 1) type narrowing 
type Browser = "chrome"|"edge"|"firefox" // from 3 value --> 1 final value 
function browserSetup(launchBrower :Browser){
switch (launchBrower) { // literal narrowing
    case "edge":
        console.log("edge browser is launched")
        break;
    case "chrome":
        console.log("chrome browser is launched")
        break;
    case "firefox":
        console.log("firefox browser is launched")
        break;

    default:
        console.log("unsupported browser")
        break;
}
}
browserSetup("chrome")

//2) type assertion
let Apiresponse:unknown ="Success"
//Apiresponse=200 // number
// type asserting using as keyword 
//console.log((Apiresponse as string ).toUpperCase())

// type asseting using <datatype>variableName
console.log((<string>Apiresponse).toUpperCase())