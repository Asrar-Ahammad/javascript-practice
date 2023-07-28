// const para = document.querySelector('.error');

// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para);
// })

// console.log(paras);

const error = document.querySelectorAll('.error');
console.log(error);

// Grab element by ID
const title = document.getElementById('page-title');
console.log(title);

const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]); // we cannot use forEach() on HTML collection.

// Get elements by tag name
const paragraph = document.getElementsByTagName('p');
console.log(paragraph);
console.log(paragraph[1]);

const a = document.querySelector('p');
console.log(a.innerText);

a.innerText += " DOM";
console.log(a.innerText);

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    console.log(paras.innerText);
    para.innerText+=' new text';
});

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is new h2</h2>' ;//+= : Append. = : To overwrite.

const people = ['Asrar','Abrar','Mario'];

people.forEach(person =>{
    content.innerHTML +=`<p>${person}</p>`;
});

const link = document.querySelector('a');


// Selecting by attribute
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.thenetninja.co.uk');
link.setAttribute('style','color: green'); 

// Adding styles through JS
const h2 = document.querySelector('.theDOM');
h2.style.color = 'crimson';
h2.style.margin = '50px';
h2.style.fontSize = '60px';
h2.style.margin = '200px';
