import {test as baseTest} from '@playwright/test'
import { LoginPage } from '../pages/login'
import { HomePage } from '../pages/home'

type salesforceObjects={
    SFlogin : LoginPage,
    SFhome : HomePage,
}

export const test = baseTest.extend<salesforceObjects>({

    SFlogin:async ({ page }, use) => {
     const salesforceLoginPage =  new LoginPage(page)
     await use(salesforceLoginPage)
    },
     SFhome:async ({ page }, use) => {
     const salesforceHomePage =  new HomePage(page)
     await use(salesforceHomePage)
    }
})
