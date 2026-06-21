import test from '@playwright/test'

test("learn Window Handling",async({page,context})=>{
    await page.goto('https://leafground.com/window.xhtml')
    const popupPromise = context.waitForEvent('page') // registering the event
    await page.getByRole('button',{name: "Open", exact: true }).click()
    // event will be fired or not? popup
    const childWindow = await popupPromise // fulfulling the promise
    await childWindow.waitForLoadState('domcontentloaded')
    console.log(await childWindow.title());
})

test("handling muptiple windows",async({page,context})=>{
await page.goto('https://leafground.com/window.xhtml')
const[windows] =await Promise.all([context.waitForEvent('page'),page.getByRole('button', // index 0 -> registering the event
    {name: "Open Multiple", exact: true }).click()])// index 1 -> trigger the event
await page.waitForLoadState('domcontentloaded')    
const currentlyOpnedWindow = windows.context().pages()
// syntax : for(var name of array){
// name.title()
//}
let ObjectOfDashBoard:any
for(const tabs of currentlyOpnedWindow){
   const titleOfPage = await tabs.title()
      console.log( titleOfPage);   
      if(titleOfPage==='Dashboard'){
         ObjectOfDashBoard= tabs
      }  
}
 await ObjectOfDashBoard.locator('#email').fill('bhuvanesh@qeagle.com')

})