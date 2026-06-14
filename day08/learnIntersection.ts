// intersection (&) --> Combines multiple types into one with all properties included

// when ? mostly we can apply this intersection at object literals instead of generic datatype
// why ?  because combining two or more datatypes using & will return 'never'
type basicInfo ={
    empId : number,
    role : string,
    contract:boolean
}
type insured = {isInsured : boolean }

type empinfo = basicInfo & insured
let seeniEmp:empinfo={
    isInsured:true,
    empId:83736,
    role :"jr.SDET",
    contract:false
}

console.log(seeniEmp.empId,seeniEmp.role,seeniEmp.isInsured)