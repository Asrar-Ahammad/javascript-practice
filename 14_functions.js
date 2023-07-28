function greet(){ // Function declaration
    console.log('Hello there');
}

const speak = function(name = 'Asrar'){ // Function expression
    console.log(`Good day ${name}`);
};

greet(); // Function call
speak('asrar');

// const calcArea = function(radius){
//     return 3.14 * radius**2;
// };
// let a = calcArea(34);
// console.log(a);

// Arrow functions
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };
// or
const calcArea = radius => 3.14 * radius**2;;

let a = calcArea(34);
console.log(a);

const hello = () => 'hello';
let b = hello();
console.log(b);
console.log(hello());

const bill = (products, tax) =>{
    let total = 0;
    return total;
}

// methods 
let c = 'asrar';
let result = c.toUpperCase();
console.log(result)

