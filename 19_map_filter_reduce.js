let arr = [23, 35, 57, 12, 34]

//For each is just a loop

// Array Map method
let a = arr.map((value, index, array) => { // It creates a new array
    console.log(value, index, array)
    return value + index
})
console.log(a)

// Array filter method
let arr2 = [0,3,5,23,345,634,34]
let a2 = arr2.filter((a)=>{
    return a<10
})
console.log(a2)

// Array reduce : It reduces an array to a single value.
let arr3 = [0,3,5,4,6,2]
let a3 = arr3.reduce((h1,h2)=>{ // It runs function by taking every two values in array in array
    return h1+h2                
})
console.log(a3)