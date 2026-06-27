import test from '@playwright/test'

test('learn to store the local storage and cookies in json',async({page})=>{
 await page.goto('https://uibank.uipath.com/welcome')
 await page.locator('#username').fill('FebApiuser')
 await page.locator('#password').fill('Eagle@123')
 await page.getByRole('button',{name: "Sign In"}).click()
 await page.getByRole('button',{name: "I agree to the Privacy Policy →"}).click()
 await page.getByText('Apply For New Account ').click()
 await page.context().storageState({path:'data/auth.json'})
// printing the locat storage
 const localData = await page.evaluate(() => ({...localStorage}));
 console.log('local storage state is captured',localData)
})