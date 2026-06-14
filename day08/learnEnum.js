// what is enumeration ?
//  enum is used to create a named constants --> it is common or fixed named variable
// framework --> choose the browser
// chrome,Chrome,CHROME --> .toLowerCase()-->  chrome
// execution status --> PASS,FAIL,SKIP
var testStatus;
(function (testStatus) {
    testStatus[testStatus["PASS"] = 0] = "PASS";
    testStatus[testStatus["FAIL"] = 1] = "FAIL";
    testStatus[testStatus["SKIP"] = 2] = "SKIP";
})(testStatus || (testStatus = {}));
function reportStep(status) {
    switch (status) {
        case testStatus.PASS:
            console.log("TEST step executed successfully");
            break;
        case testStatus.SKIP:
            console.log("test step got skipped");
            break;
        case testStatus.FAIL:
            console.log("test step failed");
            throw new Error("Execution terminated");
        default:
            console.log("Provide the valid status");
            break;
    }
}
reportStep(testStatus.FAIL);
