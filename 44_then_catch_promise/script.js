let p = new Promise((resolve, reject)=>{
    console.log("Promise is pending.")
    setTimeout(()=>{
        console.log("I am a promise and I am rejected.")
        // resolve(true)
        reject(new Error("I am an error"))
    },5000)
})

console.log(p)