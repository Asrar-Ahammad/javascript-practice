// Premitive types donot change if one change.
let first_number = 10;
let second_number = first_number;

console.log(` first : ${first_number} second : ${second_number}`)

first_number = 20
console.log(` first : ${first_number} second : ${second_number}`)

// Reference : When one value is changed then another alos changes.
const userone = {name : 'ryu', age : 30};
const usertwo = userone;

console.log(userone, usertwo);

userone.name = 'hello'
console.log(userone, usertwo);