import test, { expect } from '@playwright/test'
import path from 'path'

test("learn file upload using setInputFiles",async({page})=>{
    await page.goto('https://leafground.com/file.xhtml')
    console.log(path.join(__dirname)) // C:\SessionProjects\PW_MAY_26\tests\day10
    const fileUpload = page.locator(`//input[@type='file']`).first()
    await fileUpload.setInputFiles(path.join(__dirname,'../../data/QeagleLogo.jpeg'))
    await expect(page.locator(`.ui-fileupload-filename`)).toHaveText(/QeagleLogo.*/)
})

test.only("learn file upload using event listerner",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    const[eventBasedUpload] =await Promise.all([page.waitForEvent('filechooser'),
        page.locator(`div#drag-drop-upload`).click()])
    await eventBasedUpload.setFiles(path.join(__dirname,'../../data/QeagleLogo.jpeg'))  
    await expect(page.locator(`(//div[@class='dz-filename']/span)[1]`)).toHaveText(/QeagleLogo.*/)    
    })