document.write("hello")

let a = setTimeout(function(){
    alert("I am inside of set timeout")
},3000)
let b = prompt("Do you want to run settime out?")
if("n" == b){
    clearTimeout(a)
}
console.log(a)