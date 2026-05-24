// iterative statement -- > iteration[repeat task multiple time]
// business requirement : to print number 1 to 10 in the terminal
// rule no 1 : start number should be 1
// rule no 2 : incremental ++
// rule no 3 : condition is to print till 10 th iteration
//for(initializer;condition;iteration)
for(let i=1;i<=10;i++){
    console.log(i)
}
// analogy :  limit ==> 5 rounds 
// rule 1 : if healthy per day 5 rounds to be completed
// rule 2 : if not healthy limit 2 rounds
let isHealthy= false
for(let round=1; round<=5;round++){
    if(!isHealthy && round>2){//truthy
    break;
    }
    console.log("round no : "+round+" completed")
}