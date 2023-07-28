let actual = Math.floor(Math.random()*100)
let guess;
let count=0;
while(actual!=guess){
    count+=1;
    guess = prompt("Enter number to guess")
    if(actual > guess){
        console.log(`Actual number is greater than ${guess}.`)
    }else if(actual < guess){
        console.log(`Actual number is less than ${guess}.`)
    }
}
console.log(`Your guess is correct actual number is ${actual}. Your score is ${100-count}.`)