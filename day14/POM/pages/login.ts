import { Page } from "@playwright/test";


export class LoginPage{

    page:Page// declared Globally

    constructor(page:Page){ // page is local variable
       this.page =page  // initalized with the page instance which i received form the runner package
    }
    async enterUrl(url : string){
        await this.page.goto(url);
    }
    async enterUsername(uname : string){
    await this.page.getByRole("textbox", { name: 'Username' }).fill(uname)
    }
    async enterPassword(pword : string){
    await this.page.getByLabel("Password",{exact: true}).fill(pword)
    }
    async clickLoginButton(){
    await this.page.getByRole("button",{ name :'Log In'}).click()
    }
}