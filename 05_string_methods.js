// String Methods

let email = 'asrar@gmail.com';

//let result = email.lastIndexOf('r');

//let result = email.slice(0,10);

// let result = email.substr(0,10);

//let result = email.replace('r','w');

// let result = email.replace('m','w');



const title = 'best reads of 2019';
const author = 'Mario';
const likes = 30;

// Concatination way
let result = 'The Blog called '+title+' by '+author+' has '+likes+' likes.';
console.log(result);
console.log("The length of result is ",result.length);

//Template string
result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);
console.log(result.slice(34));
console.log(result.replace('blog','Blog'));

name = '     meena       ';
console.log(name.trim())

// HTML template string
let html = `
    <h2>${title}</h2>
    <p>by ${author}</p>
    <span> This blog has ${likes} likes</span>
`;
console.log(html)

// Practice
const s = "please give me Rs 1000";
const amount = Number.parseInt(s.slice(18));
console.log(amount);
console.log(typeof amount)