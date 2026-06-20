import { AxisHeadOffice } from "./axisHQ"
import { RBI } from "./centralBank"


// implementation class // conceret class
class ChennaiBranch  extends AxisHeadOffice implements RBI {
    loanApproval(): void {
       console.log("loan approval should be sanction from the Head office")
    } 
    upiPayment(): void {
       console.log("NPCI will maintain the upi transaction records")
    }
    repoRate(): void {
        console.log('Repo Rate: 5.25%')
    }
    kycMandatory(): void {
        console.log("AADAR and PAN card linking is mandatory")
    }

}

const axisBank =new ChennaiBranch()
axisBank.repoRate()
axisBank.kycMandatory()
axisBank.upiPayment()
axisBank.headOfficLocation()
axisBank.loanApproval()