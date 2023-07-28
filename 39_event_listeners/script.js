let x = function(e){
    console.log(e.target)
    console.log(e)
    console.log(e.type, e.clientX, e.clientY)
    alert("hello world1")
}
let y = function(e){
    console.log(e)
    alert("hello world2")
}

btn.addEventListener('click',x)
btn.addEventListener('click',y)

let a = prompt("What is your number")
if(a=='2'){
    btn.removeEventListener('click',x)
}