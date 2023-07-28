// If statments
const age = 21;

if(age > 20){
    console.log('You are over 20 years old')
}

const ninjas = ['asrar', 'abrar','hello', 'earth'];
if(ninjas.length > 3){
    console.log("That's a lot of ninjas");
}

const password = 'password is @!strong';
if(password.length >= 8){
    console.log('That password is strong enough!');
}else{
    console.log('That password is not long enough.');
}

// else if ladder
if(password.length >= 12 && password.includes('@')){
    console.log('The password is strong🔥');
}else if(password.length >= 8 || password.includes('!')){
    console.log('The password is medium strong');
}else{
    console.log('The password is weak')
}

// Switch statement
// Switch uses strict equality by default.
const grade = 'b';

switch(grade){ 
    case 'A':
        console.log('The grade is A');
        break;
    case 'D':
        console.log('The grade is D');
        break;
    default:
        console.log('Not a valid grade');
        break;
}