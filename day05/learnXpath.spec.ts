import test from"@playwright/test"
test("learn Xpath", async({page})=>{
  // relative xpath 
  // syntax : //tagName[@attributeName='value']  
  await page.goto("https://leaftaps.com/opentaps/control/login")
  // example 1 : attribute based
  await page.locator(`//input[@name='USERNAME']`).fill('democsr')
  // example 2 : text based 
  // syntax :  //tagName[text()='text value']
  const labelContent =await page.locator(`//p[@class='top']/label`).innerText()
  console.log(labelContent)
  // example 3 : collection based
  // syntax : (//tagName[@attributeName='value'])[indexCount]
  await page.locator(`(//input[@class='inputLogin'])[2]`).fill('crmsfa')
  // example 4 : partial match or contains based
  // syntax :  //tagName[contains(attributeName,'partialValue')]
  //    //h2[contains(text(),'Login')]
  await page.locator(`//input[contains(@class,'Submit')]`).click()
})