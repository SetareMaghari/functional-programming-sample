// npm i immutable
import { Map } from 'immutable';


const person2 = {
    name: 'John',
    age: 30
}

function updatePerson(person) {
    person.age = 31;
    return person;
}

updatePerson(person2);
console.log(person2); // This will have the age 31. The root object will get changed.

// So we use Immutable.js to create an immutable object. 
// This is one of the libraries that helps us to create immutable objects.
const person = Map({
    name: 'John',
    age: 30
});

console.log(person); 

/*
Result is something like this:
Map {
  size: 2,
  _root: ArrayMapNode { ownerID: OwnerID {}, entries: [ [Array], [Array] ] },
  __ownerID: undefined,
  __hash: undefined,
  __altered: false

For getting real js values, we can use the .toJS() method.
console.log(person.toJS());

Result is something like this:
{ name: 'John', age: 30 }
*/



const book = Map({
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald'
});

console.log(book.toJS());


const updatedBook = book.set('author', 'John Doe');
console.log(updatedBook.toJS()); // { title: 'The Great Gatsby', author: 'John Doe' }
console.log(book.toJS()); // { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }

function updateBook(book) {
    book.set('author', 'John Doe the second');
    return book;
}

updateBook(book);
console.log(book.toJS()); // { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }