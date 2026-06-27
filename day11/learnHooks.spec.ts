import test from '@playwright/test'

test.beforeAll(async()=>{
console.log("setting up the environment : select browser , load application url")
})

test.beforeEach(async()=>{
console.log("enter credentials and navigated to home page")
})
test('actual test execution starts',async()=>{
console.log("click create lead button")
})

test("duplicate the existing lead",async()=>{
console.log("click duplicate lead button")
})

test.afterEach(async()=>{
console.log("Clear the records")
})

test.afterAll(async()=>{
console.log("closes all the open resources[files, browser, connection between Services]")
})