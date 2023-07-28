// const blogs = [
//     {   title : 'Hello world',
//         likes: 30
//     },
//     {
//         title: 'Bye',
//         likes: 40
//     }
// ]

// console.log(blogs);


let user = {
    name : 'Asrar',
    age : 20,
    email : 'asrar@gmail.com',
    location: 'Madanapalle',
    blogs : [
        {   title : 'Hello world',
            likes: 30
        },
        {
            title: 'Bye',
            likes: 40
        }
    ],
    login : () => {
        console.log('User logged in');
    },
    logout: () => {
        console.log('User logged out');
    },
    logBlogs: function(){ // this. will not work with arrow function.
        // console.log(this.blogs);
        console.log('This user has written following blogs');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    },
    hello(){ // This can be used in short hand functions.
        console.log(this.age);
    },
};

user.login();
user.logBlogs();
user.hello();

// let n = 'mario';
// n.toUpperCase();
// console.log(n);


// Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.trunc(area));

// Random numbers

const random = Math.random();
console.log(random);
console.log(Math.round(random*100)) // For numbers between 1 -100.