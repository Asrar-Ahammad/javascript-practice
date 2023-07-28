let user = {
    name : 'Asrar',
    age : 20,
    email : 'asrar@gmail.com',
    location: 'Madanapalle'
};
console.log(user);
console.log(user.email);

console.log(user.age);
user.age = 30;
console.log(user.age);

console.log(user['email']);
user['name'] = 'Abrar';
console.log(user.name);
console.log(user)

console.log(typeof user)