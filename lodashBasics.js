import pkg from 'lodash/fp.js';
const { compose, pipe } = pkg;
/*
Lodash is a library that provides many useful functions for working with arrays, objects, and strings.
*/

/*
    Function declaration type 1
*/
function toLowerCase(string) {
    return string.toLowerCase();
}

/*
    Function declaration type 2
*/
const trim = str => str.trim();


const wrapInDiv = str => `<div>${str}</div>`;


// Calling all functions
console.log(toLowerCase("HELLO")); // -> hello
console.log(trim("   HELLO   ")); // -> HELLO
console.log(wrapInDiv("HELLO")); // -> <div>HELLO</div>
console.log(wrapInDiv(toLowerCase(trim("   HELLO   ")))); // -> <div>hello</div>

// Works, but not very readable

// -----------------------------

/**
 * Using compose: 
 */


const wrapInDivResult = compose(wrapInDiv, toLowerCase, trim)("   HELLO   "); // -> <div>hello</div>
const wrapInDivResult2 = pipe(trim, toLowerCase, wrapInDiv)("   HELLO   "); // -> <div>hello</div>, The same, different read direction
// If we have a function also to wrap in a span, we can use it like this:
const wrapInSpan = str => `<span>${str}</span>`;

// So we can define a wrap function that takes a string and a tag:
const wrap = (str, tag) => `<${tag}>${str}</${tag}>`;

// const wrapResult = compose(wrap, wrapInDivResult, wrap)("   HELLO   "); // -> This will not work, we need to pass the tag as a parameter
// const wrapResult = compose(wrap, wrapInDivResult, wrap)("   HELLO   ", "span"); // -> This will not work


// We can instead do currying,  means passing one argument at a time.

// Example 1: Defining a function with currying type 1

function add(a){
    return function(b){
        return a + b;
    }
}
console.log(add(1)(2));


// Example 2: Defining a function with currying type 2

const add2 = a => b => a + b; 
console.log(add2(1)(2));


// So we can:

function wrapWithCurrying(tag) {
    return function(str) {
        return `<${tag}>${str}</${tag}>`;
    }
}
const wrapResult = pipe(trim, toLowerCase, wrapWithCurrying("span"))("   HELLO   "); 
console.log(wrapResult);// -> <span>hello</span>