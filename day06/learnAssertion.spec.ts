import test, { expect } from "@playwright/test";

test("learn assertion",async({page})=>{
 // assertion is of two :
 // 1. generic assertion
 //  toBe(),toBeGreatherThan(0) 
 // 2. locator assertion
 //    toBeVisible(),toHaveUrl(),toBeEditbale()
  await page.goto("https://leaftaps.com/opentaps/control/login")
  // Hard assertion
  // if the assertion condition is satisfied the test will pass
  // if the assertion condition is not satisfied the test will fail, test execution will terminated
  await expect(page.locator(`//input[@name='USERNAME']`)).toBeVisible() // pass 
  await page.locator(`//input[@name='USERNAME']`).fill('democsr')
  await expect(page.locator(`//input[@name='USERNAME']`)).toHaveValue("democsr")
 
  // soft assertion 
  await expect.soft(page.locator(`//input[@name='USERNAME']`)).toHaveValue("demosalesmanager")
  //// even if the assertion condition is not satisfied the test execution will happen
  await page.locator(`(//input[@class='inputLogin'])[2]`).fill('crmsfa')
  await page.locator(`//input[contains(@class,'Submit')]`).click()
  await page.locator('//a[contains(text(),"CRM")]').click();
  await page.locator('//a[text()="Leads"]').click();
  await page.locator('//a[text()="Create Lead"]').click();
})