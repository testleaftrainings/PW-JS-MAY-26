import test from '@playwright/test';
import dotenv from 'dotenv'

const filename =process.env.envFileName
dotenv.config({ path:`data/LF_${filename}.env`});
const uname = process.env.ADMIN_USERNAME as string
const pword = process.env.ADMIN_PASSWORD as string
const url =  process.env.BASEURL as string
test("Learn to load the configuration environment using env",async({page})=>{
    await page.goto(url)
    await page.locator('#username').fill(uname) 
    await page.waitForTimeout(2000) // Waits for the given timeout in milliseconds.
     const label = await page.locator('label[for="password"]').innerText()
     console.log(label)
    await page.locator('.inputLogin').last().fill(pword)
    await page.locator('.decorativeSubmit').click()
    await page.locator('#label>a').click()
})