const animals = ['horse', 'dog', 'fish', 'cat', 'bird']


// rest operator
const [firstAnimal, secondAnimal, ...restAnimal] = animals



console.log(firstAnimal)
console.log(secondAnimal)
console.log(restAnimal)

// spread operator
const num1 = [1, 2, 3]
const num2 = [4, 5, 6]

//                copy
const allNums = [...num1, ...num2]

console.log(allNums)

const obj1 = {
    student: '01',
    studentId: 1234556
}

const obj2 = {
    student: '02',
    studentId: 7889995
}

const allObjs = {...obj1, ...obj2}
console.log(allobj)