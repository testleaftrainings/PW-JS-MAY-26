import test from"@playwright/test"
test("learn frame", async({page})=>{

    // Frame : one webpage[html] is embedded inside the another webpage[html]
    await page.goto("https://leafground.com/frame.xhtml")
     //await page.locator(`#Click`).click() --> the web element is located inside the frame
    // identify : the total number of frames within a webpage
    const totalFrameReference= page.frames()
    const frameCount =totalFrameReference.length
    console.log(`total frames present is  ${frameCount}`) // 5 // root html document is considered as the main frame
    for(let index=0; index <frameCount; index++){
        console.log(totalFrameReference[index].url())
         console.log(totalFrameReference[index].name())
    }
    // implement no 1 : frame(url or name)
   //await page.frame({url:'https://leafground.com/default.xhtml'})?.locator(`#Click`).click()
   //page.frame(``) --> Returns frame matching the specified criteria. Either name or url must be specified

   //  implement no 2 : frameLocator()
   const locator = page.frameLocator(`//iframe[@src='default.xhtml']`).getByRole('button')
   await locator.click();
   const nestedFrame = page.frameLocator(`//iframe[@src='page.xhtml']`).frameLocator(`#frame2`).getByRole('button')
   await nestedFrame.click()
   // iframe3--> iframe4 --> buttton
   await page.waitForTimeout(3000)
})