import test, { expect } from "@playwright/test";
test("learn dropsown handling",async({page})=>{
    // dropdown are two type 
    // 1. select dropdown
    // label?: string;---> visible text
    // index?: number;---> using order arrangement
  await page.goto("https://leafground.com/select.xhtml")
  console.log("fetching values inside the dropdown")
  const dropdownValues = await page.locator(`//select[@class='ui-selectonemenu']/option`).all()
//   for (const element of dropdownValues) {
//     console.log(element.innerText())
//   }
    for(let index=0; index<dropdownValues.length;index++){
        console.log( await dropdownValues[index].innerText())
    }
  await page.selectOption(`//select[@class='ui-selectonemenu']`,{label:'Playwright'})
  //{value:'LEAD_DIRECTMAIL'})
  await expect(page.locator(`//select[@class='ui-selectonemenu']`)).toHaveValue("Playwright")
  await page.selectOption(`//select[@class='ui-selectonemenu']`,{index:0})

   // 2. non - select dropdown
  await page.locator(`//label[text()='Select Country']`).click()
  await page.getByRole('option',{name: "India"}).click()
})