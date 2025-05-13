let names = ["bhanwar" , "lokesh" , "rahul" , "ajay" , "rakesh" , "ravi"]


// console.log(names)
// console.log(names[1])                   // lokesh
// console.log(names.length)               // 6
// console.log(names[names.length-6])



// push()    add a new value in array
names.push("ronak")
names.push("sagar")
// console.log(names)



// pop()     to remove the last value from array, it is remove the last one value from array

names.pop()


// console.log(names)



// shift     to remove the first value from array

names.shift()

// console.log(names)

// unshift   to add a new value in first index

names.unshift("rohit")

// console.log(names)







// slice, splice, split, join

let names2 = ["bhanwar" , "lokesh" , "rahul" , "ajay" , "rakesh" , "ravi"]

// slice             // slice(initialize, before the index)      //you can take only the values from the array

let slice = names2.slice(2, 4)


// console.log(slice)


//splice       splice(startingIndex, how many value you want to remove,   adding new values)
// key point:  it will change your original array 



// names2.splice(2, 2) 
names2.splice(2, 5 , "rekesh kumar", "ajay kumar")
console.log(names2)