// Callbacks : The functions that we pass as an argument to another function.

const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc((value) => {
    console.log(value);
})

let people = ['asrar', 'abrar', 'earth', 'hello'];

// people.forEach(function(person){
//     console.log(person);
// });
const logperson = (person) => {
    console.log(person);
}

people.forEach(logperson)


// or
// people.forEach((person)=>{
//     console.log(person);
// })