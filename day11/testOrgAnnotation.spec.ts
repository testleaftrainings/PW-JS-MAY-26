import test from '@playwright/test'

test.describe('Lead Management Module',()=>{

    test('Create Lead with Mandatory fields',{
        annotation: {
            type: 'Requirement',
            description: 'USA-53653 user should able to create a new lead',
                    }
                                            },async()=>{
         test.step('Launch Leaftaps and navigate to create lead page',async()=>{
             console.log('Opening create lead page')
         })  
         test.step('Enter mandatory fields',async()=>{
              console.log('Entering compayname, firstname, last name')
         })  
         test.step('Click create Lead Button',async()=>{
               console.log('Lead Created Successfully')
         })                                       
        
       
        })
    test.fixme('Merge Lead',async()=>{ // skipped
        console.log('Known issue : Merged lead functionality')
    })
    test.skip('delete Lead',async()=>{ // skipped
        console.log('skipping Delete lead functionality due to permission settings')
    })
    test.fail('create lead with duplicate company name',async()=>{ // will be executed 
        test.step('attempting to create duplicate lead',async()=>{
              console.log('creating the duplicate lead')
         }) 
         throw new Error('know bug') 

    })
})