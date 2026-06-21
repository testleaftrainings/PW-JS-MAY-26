import test, { expect } from "@playwright/test";
import path from 'path'
import fs from 'fs'

test('learn file download using event listerner',async({page})=>{
     await page.goto('https://leafground.com/file.xhtml')
     const[temp] =await Promise.all([page.waitForEvent('download'),page.getByRole('button', // index 0 -> registering the event
     {name: " Download", exact: true }).click()])
     const filePath =path.join(__dirname,'../../data/',temp.suggestedFilename())
     await temp.saveAs(filePath)
     expect(fs.existsSync(filePath)).toBeTruthy()

})