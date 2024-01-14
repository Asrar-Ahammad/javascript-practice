// Promise is used for parallel execution.
let promise = new Promise(function (resolve, reject) {
    console.log("I am an alert in promise.")
    resolve(56)
})

console.log("hello");

setTimeout(function () {
    console.log("hello is 2 sec.")
}, 2000)

console.log("My name is " + "Asrar")
console.log(promise)

