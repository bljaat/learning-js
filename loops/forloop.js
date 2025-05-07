//for loop in javascript


let a = 1

for(let a = 1 ; a <= 100 ; a++){    // a++ = increment
    //  console.log(a)
}


for(let a = 1 ; a <= 10 ; a++){
    let result = 2 * a                  // a = 1    2 * 1 = 2     result = 2
    // console.log(result)
}

for(let i = 10; i >= 1 ; i-- ){      // reverce table in for loop 
    // console.log(i * 2)
}




let name = "bhanwar lal"
let age = 18 
// let greet = "hello" + " " + name + ", welcome to over website . because you age is " + " " + age + "" + " you are eligble for becoming instructer"


// tamplate literals
let greet2 = `hello ${name}, welcome to over website . because you age is ${age}, you are eligble for becoming instructer `

// console.log(greet2)





// let number = prompt("give a number , which you want to see the table")   //prompt a alert of browser

// let stringtonumber = Number(number)            // datatype   string to number

// for(let i = 1; i <= 10 ; i++){
//     // console.log(stringtonumber * i)

//     console.log(`${stringtonumber} x ${i} = ${stringtonumber * i} `)
// }


// decrement

for(let i = 100 ; i >= 1 ; i--){   //reverce counting in for loop and  //  i-- = decrement
    // console.log(i)
}




// ------------------------------------advance loops--------------------------


let names = ["bhanwar" , "lokesh" , "rahul" , "ajay" , "rakesh" , "ravi"]


// for(let i = 1 ; i < names.length ; i++){
//     console.log(names[i])
// }


// for(let i = 0 ; i < names.length ; i++){
//     if(names[i] === "lokesh" ){
//         console.log("lokesh kumar")
//     }else{
//         console.log(names[i])
//     }
// }



for(let i = 0 ; i < names.length ; i++){
    if(names[i] === "rakesh" ){
        continue
    }else{
        console.log(names[i])
    }
}