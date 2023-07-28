// for loop
for(let i =0; i<5; i++){
    console.log(`In loop ${i}`);
}
console.log(`Out of loop`);

const names = ['asrar','abrar','earth'];

for(let i=0; i<names.length; i++){
    // console.log(names[i]);
    let html = `<div>${names[i]}</div>`;
    console.log(html);
}
 
//While loop
let i = 0;
while(i<5){
    console.log(`in loop ${i}`);
    i++;
}

//do While loop
console.log('Do while loop');
i = 0;
do{
    console.log(`in loop ${i}`);
    i++;
}while(i<5);

// Break and continue
for(let i = 0; i<5; i++){
    console.log('your score : ',i)
    if(i == 2){
        console.log('Congrats you got the top score');
        break;
    }
}

for(let i = 0; i<5; i++){
    if(i == 0){
        continue;
    }
    console.log('your score : ',i);
}

// Foreach
let num = [2,3,4,5,6,4]
num.forEach((element)=>{
    console.log(element)
})

//Array.from
let name = "Asrar";
let arr = Array.from(name)
console.log(arr)
console.log(typeof arr)

// for ..of
for(let i of num){ //Prints array elements
    console.log(i)
}

// for in
for(let i in num){ // Prints keys 
    console.log(i)
}
