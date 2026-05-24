// isPrime --> true , false
// business logic : if the user is subscribed to prime , else user is not a subscribed
let isPrime = true
if (isPrime==true) { // truthy
    console.log("movie starts to play")
}else{
    console.log("User should be redirected to the Subscription page")
}

// filling you income tax 
// conditon : 
// rule 1 : if person earns less than 8 LPA , 0% --> tax free
// rule 2 : if person earns more than 8 LPA [true]  or less than 15 LPA[true] , 10% --> 10%  tax is deducted
// rule 3 : if person earns more than 15 LPA , 30% --> 30%  tax is deducted
// ifelse --> unKnown data
let incomeOfThePerson=2
if (incomeOfThePerson<8) {
    console.log("tax free , no deduction for the income")
}else if(incomeOfThePerson>=8 && incomeOfThePerson<15 ){
    console.log("10%  tax is deducted")
}else{
    console.log("30%  tax is deducted")
}
// switch case --> know data 
// key == case --> "firefox" == "firefox"
let browerName="firefox"
switch (browerName) {
    case "chrome":
        console.log("148.0.7778.179")
        break
    case "firefox":
        console.log("151.0.1")    
        break
    default:
        console.log("Enter the valid browser Name")
        break
}