
let coin = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

// console.log(coin[6])      // 7


// for(let i = 0; i < coin.length; i++){
//     console.log(coin[i])
// }


// method of an array            map(), filter() , reduce()


// coin.map((coins, index) => {
//     console.log(index + ":" + coins)
// })


let names = ["rahul" , "rakesh" , "ajay" , "ravi"]

// array.map(() => {})

names.map((name, index) => {
    console.log(index + ":" + name)
})
