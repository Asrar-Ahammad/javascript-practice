let age = 30;

// let age = 50;
if(true){
    let age = 40;
    let name = 'asrar';
    console.log('Inside 1st code block ', age,name);
    if(true){
        let age = 50;
        console.log('inside 2nd code block ', age);
    }
}
console.log('outside code block ',age/*,name*/); // let and const are block scope.
// var is not block scope.