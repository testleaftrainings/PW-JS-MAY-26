import { PlaywrightWrapper } from "./leranInherit"

class LoginPage extends PlaywrightWrapper{ // my actual login page of the leaftaps application
enterUsername():void{
this.fill()
this.takeSnap()
}
enterPassword():void{
 this.fill() 
 this.takeSnap()
}
clickLoginButton():void{
this.clickElement()
this.takeSnap()
}
}
// object creation
const login = new LoginPage()
login.enterUsername()
login.enterPassword()
login.clickLoginButton()
login.captureToken()