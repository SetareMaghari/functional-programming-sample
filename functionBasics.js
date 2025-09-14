/* 
DECLARING FUNCTIONS:
 function nameOfFunction(parameters){
    LOGIC
 }
*/
function sayHello(name){
    console.log(`Hello ${name}`);
}

// CALLING FUNCTIONS:
// nameOfFunction(parameters);
 sayHello("Mateus"); // -> Hello Mateus

 // ASSIGNING FUNCTIONS TO VARIABLES:
 // const variableName = nameOfFunction;
 // Not calling, passing reference only
const functionVaiable = sayHello; 

// Calling the function variable
functionVaiable("Lisa"); // -> Hello Lisa

// Higher ORDER FUNCTIONS: 
// Functions that return other functions
// or functions that take other functions as parameters

// PASSING FUNCTIONS AS PARAMETERS
const greeting = function (greetingFunction){
    greetingFunction("Marie"); 
}

// Calling a function that takes a function as a parameter
greeting(sayHello); // -> Hello Marie


// RETURNING FUNCTIONS
function returnGreeting(name) {
    return function ( greeting ) {
        return `${greeting} ${name}`;
    }
}

// Calling a function that returns a function
const greetingFunctionResult = returnGreeting("Mateus");
console.log(greetingFunctionResult("Bonjour")); // -> Bonjour Mateus


// -----------------------------


// Real world example of higher order functions
const posts = [
    { title: "Post 1", body: "This is the body of post 1" },
    { title: "Post 2", body: "This is the body of post 2" },
    { title: "Post 3", body: "This is the body of post 3" },
]
// Example 1: Timeout function is a higher order function. It takes a function as a parameter.
// It calls the function after a certain amount of time.
function getPosts() {
    const timeOutFunction = () => {
        posts.forEach(post => {
            console.log(post.title);
        })
    }
    setTimeout(() => {
        timeOutFunction();
    }, 4000);
}

getPosts(); // -> Post 1, Post 2, Post 3

// Example 2: Map is a higher order function
// It creates a new array with the results of calling a function on every element in the original array.
const mappedPosts = posts.map((post) => ({
    title: post.title,
}));
console.log("mappedPosts", mappedPosts); // -> mappedPosts [ { title: 'Post 1' }, { title: 'Post 2' }, { title: 'Post 3' } ]

// Example 3: Filter is a higher order function
// It creates a new array with all elements that pass the test implemented by the provided function.
const filteredPosts = posts.filter(post => post.title === "Post 1");
console.log("filteredPosts", filteredPosts); // -> filteredPosts [ { title: 'Post 1' } ]

// Example 4: Reduce is a higher order function
// It executes a reducer function on each element of the array, resulting in a single output value. 
// Use case: sum of all elements in the array.
const reducedPosts = posts.reduce((acc, post) => acc + post.title, 0);
console.log("reducedPosts", reducedPosts); // -> reducedPosts 6