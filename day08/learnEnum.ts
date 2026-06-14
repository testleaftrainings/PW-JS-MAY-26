// what is enumeration ?
//  enum is used to create a named constants --> it is common or fixed named variable

// framework --> choose the browser, enviroment[QA,UAT,PROD],role based testing
// chrome,Chrome,CHROME --> .toLowerCase()-->  chrome

// execution status --> PASS,FAIL,SKIP

enum testStatus{
    PASS,//0
    FAIL,
    SKIP
}

function reportStep(status:testStatus):void{
    switch (status) {
        case testStatus.PASS:
            console.log("TEST step executed successfully")
            break;
        case testStatus.SKIP:
            console.log("test step got skipped")
            break;
        case testStatus.FAIL:
            console.log("test step failed")
            throw new Error("Execution terminated")
          
        default:
            console.log("Provide the valid status")
            break;
    }
}
reportStep(testStatus.FAIL)
