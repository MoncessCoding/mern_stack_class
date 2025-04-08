//! Destructuring 
//Unpack values/properties from array or object

const animals = ['horse', 'dog', 'fish', 'cat', 'bird']


// const [firstAnimal] = animals

// const firstAnimal = animals[0]
// console.log(firstAnimal)

// const [firsAnimal, secondAnimal] = animals;

// console.log(secondAnimal)
// console.log(firsAnimal)

const [firsAnimal, secondAnimal, fifthAnimal] = animals;
// console.log(fifthAnimal)

// console.log(animals[2])


//? Destructuring Object

const person = {
    firstName: 'John',
    lastName: 'Wick',
    emailAddress: 'johnwick@gmail.com',
    password: 'password01',
    userName: 'jonhW',
    created_At: 123123123
}

const {firstName: fn, userName, emailAddress: email, lastName} = person

console.log(userName)
console.log(person.userName)

console.log(fn)
console.log(person.firstName)

console.log(lastName)
console.log(person.lastName)