//? Callback function - pass one function as argument to another function, return function


//Anonymous function
// let exampleFunc = function (message){
//     console.log(message)
// }

// function parentFunc(callbackFunc){
//     callbackFunc("ITs from parent function: ")
// }

// parentFunc(exampleFunc)

// Coffee order
// function processOrder(callback) {
//     console.log("Order placed. please wait..")

//     setTimeout( () => {
//         callback();
//     }, 3000)
// }

// function pickUpOrder(){
//     console.log("Order is ready.")
// }

// processOrder(pickUpOrder)



let numbers = [1,2,3,4,5]

// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i] * 2)
// }

//? map()

// function multiplyBy2 (nums){
//     return nums * 2
// }
// let newNumber = numbers.map(multiplyBy2)

// let newNumber = numbers.map(function (nums){
//     return nums * 2
// })
// console.log(newNumber)

// let newArrNum = numbers.map(nums => nums * 2)
// console.log(newArrNum)
// console.log(numbers.map(nums => nums * 2))

//? filter()
let filterNumbers = [1, 2, 3, 4, 5, 6]


// for (let i = 0; i < filterNumbers.length; i++){
//     if(filterNumbers[i] % 2 == 0 ){
//         console.log(filterNumbers[i])
//     }
// }

let evenNums = filterNumbers.filter(function (nums) {
    return nums % 2 === 0;
})

console.log(evenNums)