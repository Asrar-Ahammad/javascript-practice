// Data types in JS 
// 1. Nnumbers = 1,2,3,4.4
// 2. String = 'hello'
// 3. Boolean
// 4. Null = Explicitly set to the variable with no value
// 5. Undefined = For variables that have not yet been defined 
// 6. Objects : Complex data structures- Arrays, Dates, Literals, etc
// 7. Symbols : used with objects

// Strings
console.log('hello World');

let email = 'asrar@gmail.com'
console.log(email)

// String concatenation
let first_name = 'Asrar';
let last_name = 'Ahammad';

let fullName = first_name + " " + last_name;
console.log(fullName);

// Get characters
console.log(fullName[0]);

//String length
console.log(fullName.length);

// String method
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);

