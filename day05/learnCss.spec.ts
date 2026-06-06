import test from "@playwright/test";

test("Learn basic web element interaction",async({page})=>{
    await page.goto("https://leaftaps.com/opentaps/control/login")
    // step 1 : locate the username field and fill the value 
    // locate the content under DOM structure
    await page.locator('#username').fill('democsr') 
    await page.waitForTimeout(2000) // Waits for the given timeout in milliseconds.
    // step 2 : locate the password field and fill the value 
     const label = await page.locator('label[for="password"]').innerText()
     console.log(label)
    await page.locator('.inputLogin').last().fill('crmsfa')
    // Error: strict mode violation: locator('.inputLogin') resolved to 2 elements
    // first()
    // last()
    // nth()
    // step 3 : locate the login button and click it
    await page.locator('.decorativeSubmit').click()
    // step 4 : locate the crm/sfa link and click it
    await page.locator('#label>a').click()
})