let companyName="testleaf"// literal way // string
let objCompanyName=new String("testleaf")
  // instanstian way // object // memoryReference
let objCompanyName2=new String("testleaf") // object // memoryReference

/// value1=9 value2="9"
if(objCompanyName2.includes("test")){ // value1==value2,typeof  value1 == typeof  value2]
    console.log("both the value is same")
}else(
    console.log("not same")
)
let charSeq=companyName.split("").sort().join("") 
console.log(charSeq)

let reVSeq=companyName.split("").reverse().join("")////"faeltset"//
console.log(reVSeq)

// substring()
console.log(companyName.substring(-2,7))
// // if negative value is provided it consider it as 0