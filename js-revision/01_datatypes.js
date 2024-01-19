//* Premitive and Non-Premitive

//* Premitive are 7 types:
// string, Number, Boolean, null, undefined, Symbol, BigInt

//* Reference or Non-Premitive:
// Arrays, Objects, Functions, 

const Id = Symbol('123')
const anotherId = Symbol('123')
console.log(Id)
console.log(anotherId)
console.log(Id == anotherId);

//* Types of memory
// Stack (Premitive)
// heap (Non-Premitive)

//* String

const a = new String('hello world')
console.log(a)
console.log(typeof a);
console.log(a.toUpperCase());

//* Math random
console.log(Math.random());
console.log((Math.random()*10)+1)
console.log(Math.floor((Math.random()*10)+1))

const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max-min+1)) + min);