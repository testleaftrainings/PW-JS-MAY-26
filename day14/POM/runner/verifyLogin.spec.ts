import test from '@playwright/test'
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/home'


test('TC001 - Verify the login functionality',async({page})=>{
    const lp =new LoginPage(page)
    await lp.enterUrl("https://orgfarm-7ab5008399-dev-ed.develop.my.salesforce.com/")
    await lp.enterUsername("bhuvanesh.qeagle.1ce512d00545@agentforce.com")
    await lp.enterPassword("Testleaf@2027")
    await lp.clickLoginButton()

    const hp = new HomePage(page)
    await hp.clickAppLauncher()
    await hp.clickAllButton()
    await hp.enterSearchField("sales")
    await hp.selectApp()

    

})