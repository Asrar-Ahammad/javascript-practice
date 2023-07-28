console.table()
console.warn('Please write hello world')
console.assert("err" != false)
console.assert("err" == false)

console.info("hey this is an important info")

console.time("forloop")
for(let i = 0;i<999;i++){

}
console.timeEnd("forloop")

let i=0;
console.time("whileloop")
while(i<999){
    i++
}
console.timeEnd("whileloop")