import { PlaywrightWrapper } from "./leranInherit"

class HomePage extends PlaywrightWrapper{
    clickCrmLink():void{
    this.clickElement()
    this.takeSnap()
    }
    clickLogoutButton():void{
    this.clickElement()
    this.takeSnap()
    }
    // over riding
    public captureToken(): void { // super --> new PlaywrightWrapper() [parent class level reference] 
    //  this --> new HomePage() [current class level reference] 
    //    super.captureToken() // parent class
        console.log("Now token is captured  is  the home page")
    }
}
// object creation
const home = new HomePage()
home.clickCrmLink()
home.clickLogoutButton()
home.captureToken()

