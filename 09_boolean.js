console.log(true, false);

// Methods can return boolean
let email = 'asrar@gmail.com';
let names = ['asrar','abrar','hello'];

let result = email.includes('@');
result = names.includes('earth');

console.log(result);

// Comparision operator return boolean
let age = 25;

console.log(age == 25);
console.log(age == 2);
console.log(age != 2);

// lower case letters are greater that upper case letters.
// '==' it is normal comparision. Dataypes can be different.
console.log(age == '25');

// '===' It is strict comparision. It compares both vale and type.
console.log(age === '25');
console.log(age !== 25);
console.log(age !== '25') 