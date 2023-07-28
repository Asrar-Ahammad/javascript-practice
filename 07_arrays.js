let ninjas = ['shaun', 'asrar', ' hello'];

console.log(ninjas);

// Index
console.log(ninjas[0]);

// Overiding
ninjas[0] = 'ken';
console.log(ninjas);

let ages = [20, 35, 23, 45, 35];
console.log(ages[3])

let random = ['shaun', 45, 'scyrtal'];
console.log(random);
console.log(ninjas.length);

let result = ninjas.join(',');
console.log(result);

result = ninjas.indexOf('asrar');
console.log(result);

result = ninjas.concat(ages);
console.log(result);

// let result1 = [8,4,5,,3,6];
result1 = ninjas.push('crystal');
console.log(result1);

result = ninjas.pop(); // It updates the original array. 
console.log(result);

// Array methods
console.log(typeof result);
// pop() : Removes elements from end.
//join()
//push() : It returns the length of array after adding element in array.
//toString()

let r = ages.shift(); // removes elemnts from start of array
console.log(ages, r);

r = ages.unshift();
console.log(ages, r);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

delete nums[0];
console.log(nums);
console.log(nums.length);

let num1 = [11, 121, 5, 16, 17, 18, 1, 9, 13, 14];

let newArray = nums.concat(num1);
console.log(newArray);

num1.sort(); // It sorts in alphabetically order.
console.log(num1);


let compare = (a, b) => {
    return a - b;
}
num1.sort(compare); // For sorting in ascending order.
console.log(num1);

// Splice : Used to add new items in array
let num2 = [234, 3, 5, 67, 34, 12, 64, 9, 23, 56, 23];
num2.splice(2, 3, 102, 103, 104, 105); // splice(from index, n.of elements to delete, adding elements). It modifies original array
console.log(num2);
console.log(typeof num2)

// Slice : Used to slice array. It does not modify original array.
let num4 = num2.slice(3,5)
console.log(num4)