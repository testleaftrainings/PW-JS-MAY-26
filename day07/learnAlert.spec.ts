import test, { expect } from "@playwright/test";

test("learn alert",async({page})=>{
  await page.goto("https://leafground.com/alert.xhtml")
  // registering the event here
  page.on('dialog',async(alert)=>{
   console.log(alert.type())
   console.log(alert.message())
   let alertType = alert.type()
  // customized actions
   switch (alertType) {
    case 'confirm':-
        alert.dismiss()
        break;
    case 'prompt':
        alert.accept('Bhuvanesh')
        break;
   
    default:
        alert.accept()
        break;
   }})
  // 1. simple alert --> only accept
  await page.locator(`//h5[text()=' Alert (Simple Dialog)']/following-sibling::button`).click()//
  // 2. confirmation alert --> either accept or dismiss
  await page.locator(`//h5[text()=' Alert (Confirm Dialog)']/following-sibling::button`).click()
  // 3. prompt alert --> enter a value , either accept or dismiss
  await page.locator(`//h5[text()=' Alert (Prompt Dialog)']/following-sibling::button`).click()
  let confirmTest = await page.locator(`#confirm_result`).innerText()
  console.log(confirmTest)
  await page.waitForTimeout(3000)
})