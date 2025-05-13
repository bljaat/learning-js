let profile = {
    firstname : "bhanwar lal",
    lastname : "jaat",
    age : 18
}



// console.log(profile["firstname"])
// console.log(profile["lastname"])
// console.log(profile["age"])


for (let key in profile) {
    console.log(key, ":" + profile[key])
}
