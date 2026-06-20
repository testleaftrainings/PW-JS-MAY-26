export abstract class AxisHeadOffice{
//  [liberal abstraction] 

headOfficLocation():void{
    console.log(" axis hq is Mumbai")
}

abstract loanApproval():void;// hide properties

}
// new AxisHeadOffice() --> Cannot create an instance of an abstract class.
// abstract classes will alwyas be considered as incomplete class