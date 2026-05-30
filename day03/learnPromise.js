// async function getText(){
//     return "playwright"
// }
// console.log(getText())  //Promise { 'playwright' }
// return promise internally
// what is promise ?
// promise --> javascript Object that represents the future result of an asynchronous operation.
// A Promise can be in only one of three states.
// pending// fulfilled// rejected
function verifyLogin(){
    return new Promise((resolve,reject)=>{
       let auth=false // authorization permission
        if(auth==true){
            resolve("Logged in successfully")
        }else{
            reject("Retry Login")
        }
    })
}
verifyLogin().then(result=>{console.log(result)}).catch(error=>{console.log(error)})