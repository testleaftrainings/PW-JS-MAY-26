import test, { expect, request } from '@playwright/test'
let SF_Access_Token:any
let authType:string ='Bearer'
let appUrl:any
let leadId:any
let pathParam:string='services/data/v65.0/sobjects'
let uri:string='Lead'
test.describe.serial('SF method chaining using API',async()=>{
test('Generate the Access token from the Oauth server',async({request})=>{
  const response= await request.post(`https://orgfarm-7ab5008399-dev-ed.develop.my.salesforce.com/services/oauth2/token`,{

        headers:{
            "Accept":'application/json',
            "Content-Type":'application/x-www-form-urlencoded'
        },form:{
            "client_id":"3MVG97L7PWbPq6UzgoVxPCovOlyEbHn4y.49AnVNefpZoatUojxFmv2SgpXr97g2BUyyOHjubo0zU_ZRHz1fb",
            "client_secret":"D7B16F083192783AEDBBF8FEB9AAB38CD66FD739A017752B20CF7E0006409F8E",
            "grant_type":"client_credentials"
        }
    })

    const body = await response.json()
    SF_Access_Token =body.access_token
    appUrl=body.instance_url
    console.log(response.status(),SF_Access_Token,appUrl)
    expect(response.status()).toBe(200)
})

test('create a lead using playwrigh api',async({request})=>{
   const response = await request.post(`${appUrl}/${pathParam}/${uri}`,{
        headers:{
              Authorization:`${authType} ${SF_Access_Token}`,
              "Content-Type":"application/json",
              Accept: "application/json"
        },data:{
    "Salutation":"Mr.",
    "FirstName": "Bhuvanesh",
    "LastName": "Moorthy",
    "Company": "Alphabet - ENG"
}
    })
    const body = await response.json()
    console.log(response.status())
    leadId=body.id
    expect(response.status()).toBe(201)
    
})
test('fetch the lead id',async({request})=>{
  const response=  await request.get(`${appUrl}/${pathParam}/${uri}/${leadId}`,{
        headers:{
             Authorization:`${authType} ${SF_Access_Token}`,
             Accept: "application/json"
        }
    })
    const body=  await response.json()
    console.log( response.status(),body.Name)
    expect(response.status()).toBe(200)
})
})