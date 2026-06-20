class LearnPolymorphism{
   // method overloading
    // click():void // no argument
    // click(locator:string):void // perform click action with locator as the argument
    // click(locator:string, snap:boolean):void
    // click(locator:string, snap:boolean, timeout :number)
    // click(locator?:string,snap?:boolean):void{
    //     if(snap){
    //         console.log('performs the click action along with snap shot', locator,snap)
    //     }
    //     else if (locator){
    //         console.log('perform click action with locator as the argument')
    //     }
    //     else if(!locator && !snap){
    //         console.log('performs generic click interaction')
    //     }
    // }

    // options object pattern
    click(options?: {
        locator?:string;
        snap?:boolean;
        timeouts?: number

    }):void{
        console.log(options)
    }

}
const lp = new LearnPolymorphism()
// method overloading
// lp.click("//div[@name='login']",true)
// lp.click(true)

// options object pattern --> in all the playwright wrapper method  
lp.click({locator: "//div[@name='login']"})

