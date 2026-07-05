import {test} from "../fixture/salesforceFixture"

test('Learn Custome fixture',async({SFlogin,SFhome})=>{
    await SFlogin.enterUrl("https://orgfarm-7ab5008399-dev-ed.develop.my.salesforce.com/")
    await SFlogin.enterUsername("bhuvanesh.qeagle.1ce512d00545@agentforce.com")
    await SFlogin.enterPassword("Testleaf@2027")
    await SFlogin.clickLoginButton()
    await SFhome.clickAppLauncher()
})