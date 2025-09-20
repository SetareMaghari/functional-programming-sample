// npm i immer
import { produce } from 'immer';

const person = {
    name: 'John',
    age: 30
}

const updatedPerson = produce(person, (draft) => {
    // draft is a copy of the original object so we will not modify the original object.
    draft.age = 31;
})

console.log(person);// { name: 'John', age: 30 }
console.log(updatedPerson);// { name: 'John', age: 31 }