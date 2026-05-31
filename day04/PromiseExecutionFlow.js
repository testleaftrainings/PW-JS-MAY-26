console.log('Start');
 
const promise = new Promise((resolve) => {
  console.log('Inside Promise');
  resolve('Resolved'); //---> call back  registered
});
 
promise.then((res) => console.log(res));
 
console.log('End');

/*
Print the output :  in Execution Order

Start
Inside Promise
End
Resolved
*/