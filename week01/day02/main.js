//* Function Declaration

//             parameters
// function greet(firstName, lastName){
//     console.log(`Hello, ${firstName} ${lastName}`)
// }
// call/invoke function

//   arguments
// greet('John', "Wick")
// greet('Tom', 'Barney')

//* Arrow function and Anonymous Functions

//Anonymous Functions - 
// const sayHello = function () {
//     console.log('Hello')
// }

// sayHello()

// setTimeout(function(){
//     console.log("Hello world")
// }, 2000)

// Arrow function
// const sayHi = () => {
//     console.log("Hi")
// }
// sayHi()

// One line function
// const sayHello = firstName => console.log(`Hello, ${firstName}!. How are you?`)
// sayHello('John')


//* Return 
//One line return 

// const sayHello = () => {
//     return 'Hello'
// }
// console.log(sayHello())

// same as above
// const sayHello = () => 'Hello';
// console.log(sayHello())


// Return object
const sayHello = () => ({msg: "Hello"})
console.log(sayHello())


// Traditional function vs Arrow function
function greet(firstName, lastName){
    console.log(`Hello, ${firstName} ${lastName}`)
}
greet('John', 'Wick')

const greet01 = (firstName, lastName) => console.log(`Hello, ${firstName} ${lastName}`)
greet01('Barney', 'Tom')

function add (a, b){
    return a + b
}
console.log(add(5, 5))

const add01 = (a, b) => a + b
console.log(add01(2, 2))