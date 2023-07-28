let a = document.getElementsByClassName('container')[0]
let b = document.getElementsByTagName('button')[0]
console.log(b)
a.onclick = ()=>{
    b.innerHTML = '<h1>Hello World</h1>'
}