import test from '@playwright/test'

test.use({storageState:"data/auth.json"}) // login using the staff profile
test('learn to use storageState to skip the login',async({page})=>{
// As a bank staff creating a new bank account
 await page.goto('https://uibank.uipath.com/accounts/account-apply') 
 await page.locator('#accountNickname').fill('demo_may_026')
 await page.getByLabel('Type of Account').selectOption('savings')
 await page.getByRole('button',{name: "Apply"}).click()
 await page.waitForTimeout(5000)
 const accountName = await page.locator('#accountName').innerText()
 console.log("account name is : ",accountName)
})