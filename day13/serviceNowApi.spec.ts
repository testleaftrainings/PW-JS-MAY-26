import test, { expect } from '@playwright/test'
// Global Variable declaration and initialization
let serviceUsername:string="admin"
let servicePasswrod:string="Af!ExO*vL2i5"
const encoder =btoa(`${serviceUsername}:${servicePasswrod}`)
let userId:any
let incidentNum:any

test.describe.serial("Perform API method chaining",async()=>{
test('Create an Incident using playwright api',async({request})=>{
   const responseBody=await request.post("https://dev420533.service-now.com/api/now/table/incident",{
        headers:{
            "Authorization":`Basic ${encoder}`,
            "Accept":'application/json',
            "Content-Type":'application/json'
        },data:{
           "short_description":"Asset(DELL-1234) is not rebooting, created using Playwright API Request Context",
           "urgency":"2",
           "description":"this request is solely created using the  Playwright API Request Context not using the Ui" 
        }
    })
     let jsonBody =await responseBody.json()
     userId =jsonBody.result.sys_id
     incidentNum =jsonBody.result.number
     console.log(responseBody.status())
     //.log(await responseBody.text())
     console.log(userId,incidentNum)
})

test("Fetch particular resource from the table",async({request})=>{
    const response = await request.get(`https://dev420533.service-now.com/api/now/table/incident/${userId}`,
        {
            headers:{
                Authorization:`Basic ${encoder}`,
            Accept:'application/json'
            }
        }
    )
    console.log(response.status())
    const body= await response.json()
    expect(body.result.number).toBe(incidentNum)
})
})