import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
     await page.goto('https://testleaf.my.salesforce.com/');
    const Salesforcelogin = await page.getByAltText("Salesforce login").isVisible()
    console.log(` visibitly status of SF Icon ${Salesforcelogin}`)
    await page.getByRole("textbox", { name: 'Username' }).fill("dilipkumar.rajendran@testleaf.com")
 // await page.getByRole("textbox", { name: 'Password' }).fill("TestLeaf@2025")
    await page.getByLabel("Password",{exact: true}).fill("TestLeaf@2025")
    await page.getByRole("button",{ name :'Log In'}).click()
  //  await page.getByText('Sales')
    await page.getByRole("button",{name: "App Launcher"}).click()
    await page.getByPlaceholder("Search apps and items...",{exact: true}).fill("sales")




})