import test, { expect } from "@playwright/test";

const locations =[
    {
    cityName :'Bombay - IIT',
    lat :19.1326,
    long:72.9110
    },
    {
    cityName :'Delhi - IIT',
    lat :28.5450,
    long:77.1922
    }
]

for(const location of locations){
test.describe('mutiple location verification',()=>{
test.use({
    geolocation:{ 
        latitude: location.lat,
        longitude: location.long
        
    },permissions: ['geolocation']
})
test(`Validate the location based on lat and long of ${location.cityName}`,async({page})=>{

    //-------------Network Intercepting using route------------------
    await page.route('**/*doubleclick.net/**',route=>route.abort())
    await page.route('**/*googlesyndication.com/**',route=>route.abort())
    await page.route('**/*googletagmanager.com/**',route=>route.abort())
   
    await page.goto('https://my-location.org/')
    const mapView = page.locator(`//div[@id='map']`)
    await mapView.scrollIntoViewIfNeeded()
    await page.waitForTimeout(5000)
    // Screen Shot
    //await mapView.screenshot({path: `screenShot/${location.cityName}-geo.png`})
    // ---------------visual Regression Testing-------------------------
    // Compare only the map
   await expect(mapView).toHaveScreenshot(`${location.cityName}-geo.png`,{
    maxDiffPixelRatio:0.01})
    // Compare only the latitude
    await expect(page.locator('#latitude')).toHaveScreenshot(`${location.cityName}-latitude.png`);
    // Compare only the longitude
    await expect(page.locator('#longitude')).toHaveScreenshot(`${location.cityName}-longitude.png`);

})
})
}