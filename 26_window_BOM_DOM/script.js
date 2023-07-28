// let runAgain = true;

// while (runAgain) {
//     const canDrive = (age) => {
//         return age >= 18 ? true : false
//     }

//     let age = prompt("Enter your age")
//     age = Number.parseInt(age)
//     if (canDrive(age)) {
//         alert("Yes you can drive")
//     } else if(age < 0){
//         console.error("Please enter valid age")
//         break
//     }else{
//         alert("You cannot drive")
//     }
//     runAgain = confirm("Do you want to enter again.")
// }

// let number = prompt("Enter a number")
// number = Number.parseInt(number)

// if(number >=4){
//     location.href="https://codewithharry.com"
// }

// let color = prompt("Enter page background color")

// document.body.style.background = color

// Snake water and game

let arr = ['snake','water','gun']

const randomFun = (arr)=>{
    return arr[Math.floor(Math.random()*arr.length)]
}
let user
let playAgain = true
let u1 = 0;
let u2 = 0;

while(playAgain){
    user = prompt("Enter your choice (Water/Gun/Snake)")
    user.toLowerCase()
    if(user == 'water' && randomFun(arr) == 'snake'){
        playAgain = confirm(`Computer won by choosing ${randomFun(arr)}. Do you want to play again.`)
        u2++
    }else if(user == 'water' && randomFun(arr) == 'gun'){
        playAgain = confirm(`You won by choosing ${user}. Do you want to play again.`)
        u1++
    }else if(user == 'snake' && randomFun(arr) == 'water'){
        playAgain = confirm(`You won by choosing ${user}. Do you want to play again.`)
        u1++
    }else if(user == 'snake' && randomFun(arr) == 'gun'){
        playAgain = confirm(`Computer won by choosing ${randomFun(arr)}. Do you want to play again.`)
        u2++
    }else if(user == 'gun' && randomFun(arr) == 'snake'){
        playAgain = confirm(`You won by choosing ${user}. Do you want to play again.`)
        u1++
    }else if(user == 'gun' && randomFun(arr) == 'water'){
        playAgain = confirm(`Computer won by choosing ${randomFun(arr)}. Do you want to play again.`)
        u2++
    }else if(user == randomFun(arr)){
        alert("It's a draw")
        playAgain = confirm("Do you want to play again.")
    }
    playAgain = confirm("Do you want to play again.")
}

alert(`Your score is ${u1}.Computer's score is ${u2}`)