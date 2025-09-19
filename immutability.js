// Instead of updating the object, we can create a new object with the updated value.
const person = {
    name: "John",
    age: 30
}


// Method 1: Using the Object.assign method
// Input 1: The target object
// Input 2: The source object
// Input 3: The updated values
const updatedPerson1 = Object.assign({}, person, { age: 31 });

// Method 2: Using the spread operator
const updatedPerson2 = {
    ...person,
    age: 31
}


// Method 3: Using the Object.freeze method
// It freezes the object, so it cannot be updated.
const updatedPerson3 = Object.freeze({
    ...person,
    age: 31
})

// Method 4: Using the Object.seal method
// It seals the object, so it cannot be updated, but can be modified.
const updatedPerson4 = Object.seal({
    ...person,
    age: 31
})



// -----------------------------

// Note: both object.assign and spread operator are shallow copies.
// Meaning that if the object has nested objects, the nested objects will be the same object in memory.
// So if we update the nested object in the copied object, the original object will also be updated!
// Example:
const nestedPerson = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
}

const updatedNestedPerson = {
    ...nestedPerson,
    age: 31
}
updatedNestedPerson.address.city = "Los Angeles";

// So the original object is also updated!
console.log(nestedPerson);
console.log(updatedNestedPerson);

// RESULT:
// nestedPerson: { name: 'John', age: 30, address: { city: 'Los Angeles', state: 'NY' } }  !! IMPORTANT !!
// updatedNestedPerson: { name: 'John', age: 31, address: { city: 'Los Angeles', state: 'NY' } }


// In order to avoid this, we can use the Object.freeze method.


const nestedPerson2 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
}
const updatedNestedPerson2 = Object.freeze({
    ...nestedPerson,
    age: 31
})
updatedNestedPerson2.address.city = "Los Angeles";

// So the original object is not updated!
console.log(nestedPerson2);
console.log(updatedNestedPerson2);

// RESULT:
// nestedPerson2: { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } }
// updatedNestedPerson2: { name: 'John', age: 31, address: { city: 'New York', state: 'NY' } }



// Or we can do all the nested objects the same way:
const nestedPerson3 = {
    name: "John",
    age: 30,
    address: {
        city: "New York",
        state: "NY"
    }
}
const updatedNestedPerson3 = Object.freeze({
    ...nestedPerson3,
    age: 31,
    address: {
        ...nestedPerson3.address,
        city: "Los Angeles"
    }
})

// So the original object is not updated!
console.log(nestedPerson3);
console.log(updatedNestedPerson3);

// RESULT:
// nestedPerson3: { name: 'John', age: 30, address: { city: 'New York', state: 'NY' } }
// updatedNestedPerson3: { name: 'John', age: 31, address: { city: 'Los Angeles', state: 'NY' } }


// ---------- Array ------------

// Example 4: Using the Object.seal method
const array = [1, 2, 3, 4, 5];

// Adding:
const updatedArray1 = [...array, 6]; // -> [1, 2, 3, 4, 5, 6]

const updatedArray2 = array.push(6); // -> [1, 2, 3, 4, 5, 6]

const updatedArray3 = [6, ...array]; // -> [6, 1, 2, 3, 4, 5]

const updatedArray4 = [...array.slice(0, 2), 6, ...array.slice(2)]; // -> [1, 2, 6, 3, 4, 5]

// Removing:
const updatedArray5 = array.filter(item => item !== 3); // -> [1, 2, 4, 5]

// Updating:
const updatedArray6 = array.map(item => item === 3 ? 6 : item); // -> [1, 2, 6, 4, 5]