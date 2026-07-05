import { LoginPage } from "./login";

export class HomePage extends LoginPage {

    async clickAppLauncher(){
    await this.page.locator(`//div[@class='slds-icon-waffle']`).click()
    }

   async clickAllButton(){
    await this.page.getByRole('button',{name:"View All Applications"}).click()
    }
   
    async enterSearchField(appName : string){
    await  this.page.getByPlaceholder('Search apps or items...').fill(appName)
    }
    async selectApp(){
     await  this.page.locator(`(//mark[text()='Sales'])[3]`).click()
    }

}