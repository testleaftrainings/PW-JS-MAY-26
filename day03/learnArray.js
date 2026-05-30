// array -> non primitive datatype --> object
//console.log(typeof []) // object
// []---> arrays
// , --> separator 
let course=["playwright","selenium","cypress"] //literals
 // zero based index --> value1--> index 0
 //value2--> index 1
 //value3--> index 2
 console.log(course[course.length-1])
 // property --> length
 console.log(course.length) // 1- based count
 // helper function --> add a value to an array or remove a value from an array
 // add a value to an array --> push() [Appends new elements to the end of an array]
 course.push("Appium")
 // unshift()[Inserts new elements at the start of an array]
 course.unshift("QTP")
console.log(course)
// remove a value from an array
//course[2]="selenium webdriver" // replaced
//splice()[Removes elements from an array]
//console.log(course.splice(2,3))
//pop()[Removes the last element from an array]
course.pop()
// shift()[[Removes the First element from an array]]
course.shift()
console.log(course.length)
// To retireve Value from the array one after another
for(let i=0;i<course.length;i++){
console.log(course[i])
}
// instansiation way of declaring array:->
let mentorName = new Array("bhuvanesh","harris","seeni","udai")
console.log(typeof mentorName)

let value =mentorName.concat(course)
let sortedArray =value.sort()
console.log(sortedArray)