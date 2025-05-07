let names = ["bhanwar" , "lokesh" , "rahul" , "ajay" , "rakesh" , "ravi"]


// console.log(names)
// console.log(names[1])                   // lokesh
// console.log(names.length)               // 6
// console.log(names[names.length-6])



// push()    add a new value in array
names.push("ronak")
names.push("sagar")
console.log(names)



// pop()     to remove the last value from array, it is remove the last one value from array

names.pop()


console.log(names)



// shift     to remove the first value from array

names.shift()

console.log(names)

// unshift   to add a new value in first index

names.unshift("rohit")

console.log(names)







// slice, splice, split, join

let names2 = ["bhanwar" , "lokesh" , "rahul" , "ajay" , "rakesh" , "ravi"]


let slice = names2.slice(3)

console.log(slice)